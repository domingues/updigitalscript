import { PlSqlParserVisitor } from "../lib/PlSqlParserVisitor.js";

export class Compiler extends PlSqlParserVisitor {
  lines = [];
  tmp_names_stack = [];

  to_append_to_tmp_names_stack = (ctx) => {
    return ctx.parent.constructor.original_name === "Package_obj_bodyContext";
  };

  static compile_tree(tree) {
    const compiler = new Compiler();
    compiler.visit(tree);
    return compiler.lines.join("\n");
  }

  push_line = (line) => {
    this.lines.push(line);
  };

  visitSql_script = (ctx) => {
    this.push_line('"use strict";');
    this.push_line("const _export = {};");
    this.push_line("{");
    this.visitChildren(ctx);
    this.push_line("}");
    this.push_line("return _export;");
  };

  _seq_declare__seq_stmts__exceptions = (ctx, has_seq_declare = false) => {
    const exceptions = ctx.exception_handler();
    if (exceptions.length) {
      this.push_line("try {");
    }
    if (has_seq_declare) {
      const d = ctx.seq_of_declare_specs();
      if (d) {
        this.visit(d);
      }
    }
    const s = ctx.seq_of_statements();
    if (s) {
      this.visit(s);
    }
    if (exceptions.length) {
      this.push_line("} catch (sqlerrm) {");
      let first = true;
      for (let exception of exceptions) {
        const parts = [];
        for (let part of exception.exception_name()) {
          let part_ = this.visit(part);
          if (part_ === "others") {
            parts.push("true");
          } else {
            parts.push("sqlerrm instanceof " + part_);
          }
        }
        if (!first) {
          this.push_line("else");
        }
        first = false;
        this.push_line("if (" + parts.join(" or ") + ") {");
        this.visit(exception.seq_of_statements());
        this.push_line("}");
      }
    }
    if (exceptions.length) {
      this.push_line("}");
    }
  };

  visitAnonymous_block = (ctx) => {
    this.push_line("{");
    this._seq_declare__seq_stmts__exceptions(ctx, true);
    this.push_line("}");
  };

  visitBody = this._seq_declare__seq_stmts__exceptions;

  visitVariable_declaration = (ctx) => {
    const name = this.visit(ctx.identifier());
    let line = "let " + name;
    const d = ctx.default_value_part();
    if (d) {
      line += " = " + this.visit(d);
    }
    line += ";";
    this.push_line(line);
    if (this.to_append_to_tmp_names_stack(ctx)) {
      this.tmp_names_stack.push(name);
    }
  };

  visitId_expression = (ctx) => {
    const id = ctx.DELIMITED_ID();
    if (id) {
      return id
        .getText()
        .replace(/"/g, "") // remove DELIMITED_ID quotes
        .replace(/_/g, "__") // escape the escape chars
        .replace(/ /g, "_s") // escape spaces
        .replace(/'/g, "_a"); // escape apostrophes
    }
    return ctx.getText();
  };

  visitNumeric = (ctx) => ctx.getText();

  visitQuoted_string = (ctx) => ctx.getText();

  visitUnary_expression = (ctx) => {
    if (ctx.MINUS_SIGN()) {
      return "-" + this.visit(ctx.unary_expression());
    } else if (ctx.PLUS_SIGN()) {
      return this.visit(ctx.unary_expression());
    }
    return this.visit(ctx.atom());
  };

  visitAssignment_statement = (ctx) =>
    this.push_line(
      `${this.visit(ctx.general_element())} = ${this.visit(ctx.expression())};`,
    );

  visitConcatenation = (ctx) => {
    if (ctx._op) {
      return `${this.visit(ctx.concatenation(0))} ${ctx._op.text} ${this.visit(ctx.concatenation(1))}`;
    } else if (ctx.BAR().length) {
      return `${this.visit(ctx.concatenation(0))} + ${this.visit(ctx.concatenation(1))}`;
    }
    return this.visitChildren(ctx);
  };

  visitAtom = (ctx) => {
    if (ctx.LEFT_PAREN()) {
      return "(" + this.visit(ctx.expressions()) + ")";
    }
    return this.visitChildren(ctx);
  };

  visitReturn_statement = (ctx) => {
    const exp = ctx.expression();
    if (exp) {
      this.push_line("return " + this.visit(ctx.expression()) + ";");
    } else {
      this.push_line("return;");
    }
  };

  visitGeneral_element = (ctx) => {
    const parts = [];
    const g_e = ctx.general_element(0);
    if (g_e) {
      parts.push(this.visit(g_e));
    }
    for (let part of ctx.general_element_part()) {
      parts.push(this.visit(part));
    }
    return parts.join(".");
  };

  visitGeneral_element_part = (ctx) => {
    const parts = [this.visit(ctx.id_expression())];
    for (let args of ctx.function_argument()) {
      parts.push(this.visit(args));
    }
    return parts.join("");
  };

  visitFunction_argument = (ctx) => {
    const parts = [];
    for (let arg of ctx.argument()) {
      parts.push(this.visit(arg));
    }
    return "(" + parts.join(", ") + ")";
  };

  visitCall_statement = (ctx) => {
    const parts = [];
    for (let part of ctx.children) {
      if (part.symbol) {
        if (part.symbol.text === ".") parts.push(".");
      } else {
        parts.push(this.visit(part));
      }
    }
    this.push_line(parts.join("") + ";");
  };

  _identifier_id_expressions = (ctx) => {
    const parts = [this.visit(ctx.identifier())];
    for (let part of ctx.id_expression()) {
      parts.push(this.visit(part));
    }
    return parts.join(".");
  };

  visitRoutine_name = this._identifier_id_expressions;

  visitException_name = this._identifier_id_expressions;

  visitFunction_body = (ctx) => {
    const name = this.visit(ctx.identifier());
    this._aux_function(name, ctx);
    if (this.to_append_to_tmp_names_stack(ctx)) {
      this.tmp_names_stack.push(name);
    }
  };

  visitCreate_function_body = (ctx) => {
    const name = this.visit(ctx.function_name().identifier());
    this._aux_function(name, ctx);
    this.push_line(`_export.${name} = ${name};`);
  };

  visitProcedure_body = (ctx) => {
    const name = this.visit(ctx.identifier());
    this._aux_function(name, ctx);
    if (this.to_append_to_tmp_names_stack(ctx)) {
      this.tmp_names_stack.push(name);
    }
  };

  visitCreate_procedure_body = (ctx) => {
    const name = this.visit(ctx.procedure_name().identifier());
    this._aux_function(name, ctx);
    this.push_line(`_export.${name} = ${name};`);
  };

  _aux_function = (name, ctx) => {
    const args = [];
    for (let arg of ctx.parameter()) {
      args.push(this.visit(arg.parameter_name()));
    }
    this.push_line(`function ${name}(${args.join(", ")}) {`);
    const s_d_s = ctx.seq_of_declare_specs();
    if (s_d_s) {
      this.visit(s_d_s);
    }
    this.visit(ctx.body());
    this.push_line(`}`);
  };

  visitLoop_statement = (ctx) => {
    if (ctx.WHILE()) {
      this.push_line("while (" + this.visit(ctx.condition()) + ") {");
    } else if (ctx.FOR()) {
      const for_cursor = ctx.cursor_loop_param();
      const for_var = this.visit(for_cursor.index_name());
      const parts = ["for (let ", for_var, " = "];
      if (for_cursor.REVERSE()) {
        parts.push(this.visit(for_cursor.upper_bound()), "; ");
        parts.push(for_var, " >= ", this.visit(for_cursor.lower_bound()), "; ");
        parts.push(for_var, "--) {");
      } else {
        parts.push(this.visit(for_cursor.lower_bound()), "; ");
        parts.push(for_var, " <= ", this.visit(for_cursor.upper_bound()), "; ");
        parts.push(for_var, "++) {");
      }
      this.push_line(parts.join(""));
    } else {
      this.push_line("while (true) {");
    }
    this.visit(ctx.seq_of_statements());
    this.push_line("}");
  };

  visitRelational_expression = (ctx) => {
    if (ctx.children.length === 1) {
      return this.visit(ctx.compound_expression());
    }
    let op = ctx.relational_operator().getText();
    if (op === "=") {
      op = "==";
    }
    return [
      this.visit(ctx.relational_expression(0)),
      op,
      this.visit(ctx.relational_expression(1)),
    ].join(" ");
  };

  visitExit_statement = (ctx) => this.push_line("break;");

  visitContinue_statement = (ctx) => this.push_line("continue;");

  visitLogical_expression = (ctx) => {
    if (ctx.AND()) {
      return `${this.visit(ctx.logical_expression(0))} && ${this.visit(ctx.logical_expression(1))}`;
    }
    if (ctx.OR()) {
      return `${this.visit(ctx.logical_expression(0))} || ${this.visit(ctx.logical_expression(1))}`;
    }
    return this.visit(ctx.unary_logical_expression());
  };

  visitUnary_logical_expression = (ctx) => {
    const a = this.visit(ctx.multiset_expression());
    const b = ctx.unary_logical_operation();
    let c = "";
    if (b) {
      c = this.visit(b);
    }
    if (ctx.NOT()) {
      return "!(" + a + c + ")";
    }
    return a + c;
  };

  visitUnary_logical_operation = (ctx) => {
    if (ctx.NOT()) {
      return " != " + this.visit(ctx.logical_operation());
    }
    return " == " + this.visit(ctx.logical_operation());
  };

  visitIf_statement = (ctx) => {
    this.push_line("if (" + this.visit(ctx.condition()) + ") {");
    this.visit(ctx.seq_of_statements());
    for (let part of ctx.elsif_part()) {
      this.visit(part);
    }
    const else_part = ctx.else_part();
    if (else_part) {
      this.visit(else_part);
    }
    this.push_line("}");
  };

  visitElsif_part = (ctx) => {
    this.push_line("} else if (" + this.visit(ctx.condition()) + ") {");
    this.visit(ctx.seq_of_statements());
  };

  visitElse_part = (ctx) => {
    this.push_line("} else {");
    this.visit(ctx.seq_of_statements());
  };

  visitCreate_package_body = (ctx) => {
    const name = this.visit(ctx.package_name(0));
    this.push_line("const " + name + " = {};\n{");
    this.tmp_names_stack = [];
    for (let body of ctx.package_obj_body()) {
      body.constructor.original_name = "Package_obj_bodyContext";
      this.visit(body);
    }
    this._seq_declare__seq_stmts__exceptions(ctx);
    for (let name_ of this.tmp_names_stack) {
      this.push_line(`${name}.${name_} = ${name_};`);
    }
    this.push_line("}");
    this.push_line(`_export.${name} = ${name};`);
  };

  visitType_definition = (ctx) => {
    const name = this.visit(ctx.type_name());
    this.push_line(`class type__${name} {`);
    const type_def = ctx.object_type_def();
    if (type_def) {
      const members = type_def
        .object_member_spec()
        .map((member) => this.visit(member.identifier()));
      this.push_line(`constructor(${members.join(", ")}) {`);
      members.forEach((member) => {
        this.push_line(`this.${member} = ${member};`);
      });
      this.push_line("}");
    }
    this.push_line("}");
    this.push_line(`const ${name} = (...args) => new type__${name}(...args);`);
    this.push_line(`_export.${name} = ${name};`);
  };

  visitType_declaration = (ctx) => {
    const name = this.visit(ctx.identifier());
    this.push_line(`class type__${name} {`);
    const members = ctx
      .record_type_def()
      .field_spec()
      .map((member) => this.visit(member.column_name()));
    this.push_line(`constructor(${members.join(", ")}) {`);
    members.forEach((member) => {
      this.push_line(`this.${member} = ${member};`);
    });
    this.push_line("}");
    this.push_line("}");
    this.push_line(`const ${name} = (...args) => new type__${name}(...args);`);
    if (this.to_append_to_tmp_names_stack(ctx)) {
      this.tmp_names_stack.push(name);
    } else {
      this.push_line(`_export.${name} = ${name};`);
    }
  };

  visitConstant = (ctx) => ctx.getText();
}
