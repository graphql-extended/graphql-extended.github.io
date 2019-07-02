import 'babel-polyfill';
import * as React from 'react';
import { render } from 'react-dom';
import { App } from './App';

import('./brace');

const root = document.querySelector('#app');

render(<App />, root);
