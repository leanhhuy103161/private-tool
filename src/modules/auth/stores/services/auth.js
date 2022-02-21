import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '@services/http'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: axiosBaseQuery(),
  endpoints: (build) => {
    return {
      getUserInfo: build.query({ query: (userId) => ({ url: `/users/${userId}/`, method: 'get' }) }),
      login: build.mutation({
        query: (data) => ({ url: '/api/auth/login', method: 'post', data }),
      }),
    }
  },
})

export const { useLoginMutation, useGetUserInfoQuery } = authApi;