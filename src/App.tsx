import * as React from 'react';
import { Layout, Header, Spinner } from './components';

const Content = React.lazy(() => import('./components/Content'));

export const App: React.SFC = () => (
  <Layout header={<Header />}>
    <React.Suspense fallback={<Spinner />}>
      <Content />
    </React.Suspense>
  </Layout>
);
