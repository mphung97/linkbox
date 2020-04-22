import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import IndexPage from 'pages';
import NotFound from 'pages/404';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <IndexPage />
      </Route>
      <Route path="/404" exact>
        <NotFound />
      </Route>
      <Route path="*">
        <Redirect to="/404" />
      </Route>
    </Switch>
  </Router>
);

export default App;
