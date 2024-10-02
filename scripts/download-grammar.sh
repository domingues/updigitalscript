#!/bin/bash
set -e

PARENT_PATH=$(dirname -- "$(readlink -f -- "$BASH_SOURCE")")
DIR="${PARENT_PATH}/grammar"

mkdir -p "${DIR}"

curl --output "${DIR}/PlSqlLexer.g4" https://raw.githubusercontent.com/antlr/grammars-v4/master/sql/plsql/PlSqlLexer.g4
curl --output "${DIR}/PlSqlParser.g4" https://raw.githubusercontent.com/antlr/grammars-v4/master/sql/plsql/PlSqlParser.g4
