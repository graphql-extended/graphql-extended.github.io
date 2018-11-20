export interface EditorAnnotation {
  startRow: number;
  startColumn: number;
  endRow: number;
  endColumn: number;
  type: string;
  text: string;
}

export interface GraphQLError extends Error {
  range: [number, number];
  line: number;
  column: number;
}
