#!/bin/bash
set -e

PARENT_PATH=$(dirname -- "$(readlink -f -- "$BASH_SOURCE")")
DIR="${PARENT_PATH}/lib"

mkdir -p "${DIR}"

curl --output "${DIR}/PlSqlLexerBase.js" https://raw.githubusercontent.com/antlr/grammars-v4/master/sql/plsql/JavaScript/PlSqlLexerBase.js
curl --output "${DIR}/PlSqlParserBase.js" https://raw.githubusercontent.com/antlr/grammars-v4/master/sql/plsql/JavaScript/PlSqlParserBase.js
