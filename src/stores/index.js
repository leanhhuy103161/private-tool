import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import rootReducer from './reducers'

function config() {
  const store = configureStore({
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
  })

  return store
}

export default config()