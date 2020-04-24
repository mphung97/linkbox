import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';
import Layout from 'components/Layout';

import IndexPage from 'containers/IndexPage';
import NotFound from 'containers/NotFoundPage';
import Login from 'containers/LoginPage/Loadable';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <PrivateRoute path="/" exact>
          <IndexPage />
        </PrivateRoute>
        <Route path="/login" exact component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
