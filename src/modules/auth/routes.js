import { lazy } from 'react'

const routers = [
  {
    path: '/login',
    exact: true,
    component: lazy(() => import('./pages/login')),
  },
  {
    path: '/register',
    exact: true,
    component: lazy(() => import('./pages/register')),
  },
]

export default routers
