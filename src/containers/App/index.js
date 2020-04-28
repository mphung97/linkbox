/* lib */
import React from 'react'
import { Route, Switch } from 'react-router-dom'
/* components */
import Layout from 'components/Layout'
import PrivateRoute from 'components/PrivateRoute'
/* containers */
import IndexPage from 'containers/IndexPage'
import NotFound from 'containers/NotFoundPage'
import Login from 'containers/LoginPage/Loadable'

const App = () => (
  <Layout>
    <Switch>
      <PrivateRoute exact path="/" component={IndexPage} />
      <Route exact path="/login" component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Layout>
)

export default App
