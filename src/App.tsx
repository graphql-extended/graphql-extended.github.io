import * as React from 'react';
import { Layout, Content, Header } from './components';

export const App: React.SFC = () => (
  <Layout header={<Header />}>
    <Content />
  </Layout>
);
