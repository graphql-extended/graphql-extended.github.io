import * as React from 'react';

const imageStyle: React.CSSProperties = {
  float: 'left',
  marginRight: '10px',
};

export const Icon: React.SFC = () => (
  <img src={require('../images/logo.png')} style={imageStyle} alt="GraphQL eXtended logo" />
);
