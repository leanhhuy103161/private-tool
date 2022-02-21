// import libs
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAuthToken } from '@modules/auth/stores/slices/auth'


// import components
import routes from '@routes'
import PrivateRoute from '@routes/private'
import PublicRoute from '@routes/public'

function App() {
  const isLoggedIn = useSelector(selectAuthToken)

  return (
    <Router>
      <Switch>
        {
          routes.map((route, i) => {
            if (route.auth) {
              return <PrivateRoute isAuthenticated={!!isLoggedIn} key={i} {...route} />
            }
            return <PublicRoute isAuthenticated={!!isLoggedIn} key={i} {...route} />
          })
        }
      </Switch>
    </Router>
  )
}

export default App
