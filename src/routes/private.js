import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import PrivateLayout from '@layout/private'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return <Route {...rest} render={props => {
    return <Suspense fallback={<div>Loading...</div>}>
      {
        isAuthenticated
          ? (
            <PrivateLayout>
              <Component {...props} />
            </PrivateLayout>
          )
          : (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          )
      }
    </Suspense>
  }} />
}

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  location: PropTypes.object,
  isAuthenticated: PropTypes.bool.isRequired,
}

export default PrivateRoute
