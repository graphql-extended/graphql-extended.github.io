export interface EditorAnnotation {
  row: number;
  column: number;
  type: string;
  text: string;
}

export interface GraphQLError extends Error {
  locations: Array<{
    column: number;
    line: number;
  }>;
}
