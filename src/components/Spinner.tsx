import * as React from 'react';

export const Spinner = () => (
  <div className="app-center">
    <div className="lds-dual-ring" />
    <div className="lds-message">Loading - this can take a while</div>
  </div>
);
