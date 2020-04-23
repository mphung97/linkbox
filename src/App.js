import PrivateRoute from 'components/PrivateRoute';
import IndexPage from 'pages';
import NotFound from 'pages/404';
import Login from 'pages/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <PrivateRoute path="/" exact>
        <IndexPage />
      </PrivateRoute>
      <Route path="/login" exact component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;
