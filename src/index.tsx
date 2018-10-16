import 'babel-polyfill';
import 'brace';
import 'brace/mode/javascript';
import 'brace/mode/graphqlschema';
import 'brace/theme/tomorrow';
import 'brace/ext/language_tools';
import 'brace/ext/searchbox';
import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';

const root = document.querySelector('#app');

render(<App />, root);
