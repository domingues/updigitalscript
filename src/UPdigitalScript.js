import { BaseErrorListener, CharStream, CommonTokenStream } from "antlr4ng";
import { PlSqlLexer } from "../lib/PlSqlLexer.js";
import { PlSqlParser } from "../lib/PlSqlParser.js";
import { Compiler } from "./Compiler.js";

export class UPdigitalScriptSyntaxError extends Error {}

class ErrorListener extends BaseErrorListener {
  syntaxError(recognizer, symbol, line, column, message, payload) {
    throw new UPdigitalScriptSyntaxError(`${line}:${column} ${message}`);
  }
}

export function compile(input) {
  const chars = CharStream.fromString(input);

  const lexer = new PlSqlLexer(chars);
  lexer.removeErrorListeners();
  lexer.addErrorListener(new ErrorListener());

  const tokens = new CommonTokenStream(lexer);
  const parser = new PlSqlParser(tokens);
  parser.removeErrorListeners();
  parser.addErrorListener(new ErrorListener());

  const tree = parser.sql_script();
  return Compiler.compile_tree(tree);
}

export function eval_js(script, local_scope = {}, js_scope = globalThis) {
  const local_vars = Object.keys(local_scope);
  const local_values = Object.values(local_scope);
  const f = Function("js", ...local_vars, script);
  const exports = f(js_scope, ...local_values);
  Object.assign(local_scope, exports);
}

export default class UPdigitalScriptEnvironment {
  SyntaxError = UPdigitalScriptSyntaxError;

  constructor(js_scope = globalThis) {
    this.scope = {};
    this.js_scope = js_scope;
  }

  compile_to_js(script) {
    return compile(script);
  }

  eval_js(script) {
    eval_js(script, this.scope, this.js_scope);
  }

  eval(script) {
    this.eval_js(compile(script));
  }

  async init_browser(ups_scope_name = "ups") {
    const promises = [];
    for (const script of this.js_scope.document.querySelectorAll(
      "script[type='text/updigitalscript']",
    )) {
      if (script.hasAttribute("src") && script.src) {
        promises.push(
          fetch(script.src).then((response) => {
            if (response.ok) return response.text();
          }),
        );
      } else {
        promises.push(Promise.resolve(script.textContent));
      }
    }
    for (const script of await Promise.all(promises)) {
      if (!script) {
        continue;
      }
      await new Promise((resolve) => {
        setTimeout(() => {
          try {
            if (script.trim()) {
              this.eval(script);
            }
          } catch (error) {
            console.error(error);
          } finally {
            resolve(); // resolve to ensure next script runs after this one
          }
        }, 0);
      });
    }
    this.js_scope[ups_scope_name] = this.scope;
  }
}
