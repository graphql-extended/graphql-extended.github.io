import * as React from 'react';
import { TextEditor } from './Editor';

export interface SchemaProps {
  value: string;
}

export const Schema: React.SFC<SchemaProps> = ({ value }) => <TextEditor readOnly value={value} mode="graphqlschema" />;
