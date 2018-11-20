import { Connectors } from 'gqlx-js';
import { EditorAnnotation, GraphQLError } from './types';

const prettier: any = require('prettier/standalone');
const plugins = [require('prettier/parser-babylon')];

export function prettify(connectors: Connectors) {
  const config = {
    printWidth: 80,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    semi: true,
    plugins,
  };

  for (const key of Object.keys(connectors)) {
    const connector = connectors[key];

    for (const field of Object.keys(connector)) {
      const content = connector[field];

      try {
        connector[field] = prettier.format(content, config);
      } catch (e) {
        console.error(e);
      }
    }
  }

  return connectors;
}

export function getAnnotations(error: any): Array<EditorAnnotation> {
  const gqlError = error as GraphQLError;

  if (gqlError.range) {
    const [start, end] = gqlError.range;
    const text = gqlError.message;
    const row = gqlError.line - 1;
    const col = gqlError.column - 1;
    const len = end - start;

    return [
      {
        startColumn: col,
        endColumn: col + len,
        endRow: row,
        startRow: row,
        text,
        type: 'error',
      },
    ];
  }

  return [];
}
