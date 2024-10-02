import { Lexer } from "antlr4ng";

export abstract class PlSqlLexerBase extends Lexer {
  IsNewlineAtPos(pos: number) {
    const la = this.inputStream.LA(pos);
    return la == -1 || String.fromCharCode(la) == "\n";
  }
}
