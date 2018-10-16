import * as React from 'react';
import AceEditor from 'react-ace';
import { EditorAnnotation } from '../types';

const editorStyle: React.CSSProperties = {
  position: 'relative',
};

const editor = {
  $blockScrolling: Infinity,
};

const options = {
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: false,
  enableSnippets: false,
  showLineNumbers: true,
  tabSize: 2,
};

export interface TextEditorProps {
  mode: string;
  value: string;
  height?: string;
  readOnly?: boolean;
  annotations?: Array<EditorAnnotation>;
  onChange?(value: string): void;
}

export const TextEditor: React.SFC<TextEditorProps> = ({ mode, value, height, onChange, readOnly, annotations }) => (
  <div style={editorStyle}>
    <AceEditor
      mode={mode}
      theme="tomorrow"
      annotations={annotations}
      onChange={onChange}
      height={height}
      fontSize={14}
      showPrintMargin
      width="100%"
      showGutter
      highlightActiveLine
      readOnly={readOnly}
      value={value}
      editorProps={editor}
      setOptions={options}
    />
  </div>
);
