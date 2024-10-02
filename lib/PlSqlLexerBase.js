import { Lexer } from "antlr4ng";
export class PlSqlLexerBase extends Lexer {
    IsNewlineAtPos(pos) {
        const la = this.inputStream.LA(pos);
        return la == -1 || String.fromCharCode(la) == "\n";
    }
}
