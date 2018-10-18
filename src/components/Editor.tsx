import * as React from 'react';
import AceEditor from 'react-ace';
import { EditorAnnotation } from '../types';

const editorStyle: React.CSSProperties = {
  flexGrow: 1,
  position: 'relative',
};

const editor = {
  $blockScrolling: Infinity,
};

const options = {
  autoScrollEditorIntoView: true,
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

export class TextEditor extends React.Component<TextEditorProps> {
  private editor: any;

  private setEditor = (el: any) => {
    this.editor = el && el.editor;
    this.resized();
  };

  private resized = () => {
    const { editor } = this;

    if (editor) {
      const container = editor.container.parentElement;
      container.style.height = `${~~container.getBoundingClientRect().height}px`;
      editor.resize();
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.resized);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resized);
  }

  render() {
    const { mode, value, height, onChange, readOnly, annotations } = this.props;
    return (
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
          ref={this.setEditor}
          editorProps={editor}
          setOptions={options}
        />
      </div>
    );
  }
}
