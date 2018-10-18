import * as React from 'react';
import { CssBaseline } from '@material-ui/core';

export interface LayoutProps {
  header?: React.ReactChild;
  footer?: React.ReactChild;
}

const pageStyle: React.CSSProperties = {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
};

const bodyStyle: React.CSSProperties = {
  display: 'flex',
  flex: 1,
  padding: '1em',
};

export const Layout: React.SFC<LayoutProps> = ({ header, footer, children }) => (
  <>
    <CssBaseline />
    <div style={pageStyle}>
      {header}
      <div style={bodyStyle}>{children}</div>
      {footer}
    </div>
  </>
);
