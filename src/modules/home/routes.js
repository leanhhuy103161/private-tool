// import lib
import { lazy } from 'react'

const routers = [
  {
    path: '/private-demo',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/privateDemo')),
  },
  {
    path: '/',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/privateDemo')),
  },
]

export default routers
