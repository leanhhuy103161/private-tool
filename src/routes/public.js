import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import PublicLayout from '@layout/public'

const PublicRoutes = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <PublicLayout>
            <Component {...props} />
          </PublicLayout>
        </Suspense>
      )
    }} />
  )
}

PublicRoutes.propTypes = {
  component: PropTypes.object.isRequired,
  location: PropTypes.object,
}

export default PublicRoutes
