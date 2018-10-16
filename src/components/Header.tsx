import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

export const Header: React.SFC = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="h6" color="inherit">
        GraphQL eXtended
      </Typography>
    </Toolbar>
  </AppBar>
);
