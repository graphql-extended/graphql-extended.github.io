import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Icon } from './Icon';
import { GitHubCat } from './GitHubCat';

export const Header: React.SFC = () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Icon />
      <Typography variant="h6" color="inherit">
        GraphQL eXtended
      </Typography>
    </Toolbar>
    <GitHubCat url="https://github.com/graphql-extended" />
  </AppBar>
);
