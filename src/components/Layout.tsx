import * as React from 'react';
import { CssBaseline } from '@material-ui/core';

export const Layout: React.SFC = ({ children }) => (
  <React.Fragment>
    <CssBaseline />
    {children}
  </React.Fragment>
);
