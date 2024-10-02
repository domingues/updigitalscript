import { Parser, TokenStream } from "antlr4ng";

export abstract class PlSqlParserBase extends Parser {
  _isVersion10;
  _isVersion12;

  constructor(input: TokenStream) {
    super(input);
    this._isVersion10 = false;
    this._isVersion12 = true;
  }

  isVersion10() {
    return this._isVersion10;
  }

  isVersion12() {
    return this._isVersion12;
  }

  setVersion10(value: boolean) {
    this._isVersion10 = value;
  }

  setVersion12(value: boolean) {
    this._isVersion12 = value;
  }
}
