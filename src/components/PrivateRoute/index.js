/* lib */
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { selectLoggedIn } from 'containers/App/selectors'
import PropTypes from 'prop-types'

function PrivateRoute({ component: Component, ...rest }) {
  const isLoggedIn = useSelector(selectLoggedIn)

  useEffect(() => {}, [])

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={
        ({ location }) =>
          isLoggedIn ? (
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
