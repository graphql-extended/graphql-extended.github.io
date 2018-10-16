import * as React from 'react';

export interface TabContainerProps {
  current: number;
  desired: number;
}

const show: React.CSSProperties = {
  visibility: 'visible',
  display: 'block',
};

const hide: React.CSSProperties = {
  visibility: 'collapse',
  display: 'none',
};

export const TabContainer: React.SFC<TabContainerProps> = ({ current, desired, children }) => (
  <div style={current === desired ? show : hide}>{children}</div>
);
