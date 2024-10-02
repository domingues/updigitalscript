#!/bin/bash
set -e

PARENT_PATH=$(dirname -- "$(readlink -f -- "$BASH_SOURCE")")
GRAMMAR_DIR="${PARENT_PATH}/grammar"
LIB_DIR="${PARENT_PATH}/lib"
mkdir -p "${LIB_DIR}"

antlr4ng -Dlanguage=TypeScript -visitor -no-listener -o "${LIB_DIR}" -lib ${GRAMMAR_DIR} -Xexact-output-dir "${GRAMMAR_DIR}/PlSqlLexer.g4" "${GRAMMAR_DIR}/PlSqlParser.g4"
