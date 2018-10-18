import * as React from 'react';
import Highlight from 'react-highlight';

export interface SchemaProps {
  value: string;
}

export const Schema: React.SFC<SchemaProps> = ({ value }) => <Highlight className="typescript">{value}</Highlight>;
