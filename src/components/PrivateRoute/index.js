/* lib */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import auth from 'utils/auth'

function PrivateRoute({ component: Component, ...rest }) {
  useEffect(() => {}, [])

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={
        ({ location }) =>
          auth.loggedIn() ? (
            <Component />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
}

export default PrivateRoute
