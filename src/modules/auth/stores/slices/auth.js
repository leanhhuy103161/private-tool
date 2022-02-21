import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../services/auth'
import { setAuthorizationHeader, unSetAuthorizationHeader } from "@services/http"
import { setStoreItem, getStoreItem, removeStoreItem } from "@services/localStorage"
import { STORAGE_KEYS } from "@modules/app/constants"

const userStorage = getStoreItem(STORAGE_KEYS.USER)

const initialState = { user: userStorage }

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut(state, action) {
      removeStoreItem(STORAGE_KEYS.USER)
      unSetAuthorizationHeader()
      state.user = null
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload
        setStoreItem(STORAGE_KEYS.USER, payload)
        setAuthorizationHeader(payload.accessToken)
      }
    )
  },
})

export const { logOut } = authSlice.actions
export const selectCurrentUser = (state) => state.auth?.user
export const selectAuthToken = (state) => state.auth?.user?.accessToken

export default authSlice.reducer
