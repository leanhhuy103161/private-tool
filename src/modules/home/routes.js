// import lib
import { lazy } from 'react'

const routers = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./pages/home')),
  },
  {
    path: '/private-demo',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/privateDemo')),
  },
]

export default routers
