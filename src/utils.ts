import { Connectors } from 'gqlx-js';
import { EditorAnnotation, GraphQLError } from './types';

const prettier: any = require('prettier/standalone');
const plugins = [require('prettier/parser-babylon')];

const getPositionRegex = /\((\d+)\:(\d+)\)/;

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
      connector[field] = prettier.format(content, config);
    }
  }

  return connectors;
}

export function getAnnotations(error: any): Array<EditorAnnotation> {
  const gqlError = error as GraphQLError;

  if (gqlError.locations) {
    return gqlError.locations.map(m => ({
      row: m.line - 1,
      column: m.column - 1,
      text: gqlError.message,
      type: 'error',
    }));
  } else if (error instanceof Error) {
    const position = getPositionRegex.exec(error.message);

    if (position) {
      return [
        {
          row: +position[1] - 1,
          column: +position[2] - 1,
          text: error.message,
          type: 'error',
        },
      ];
    }
  }

  return [];
}
