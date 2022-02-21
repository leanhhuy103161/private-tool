import axios from 'axios'
import { getStoreItem } from "./localStorage"
import { STORAGE_KEYS } from "@modules/app/constants"

const API_URL = process.env.REACT_APP_API_ENDPOINT

const http = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

http.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error.response || error.request || error.message),
)

export const setAuthorizationHeader = (accessToken) => {
  http.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
}

export const unSetAuthorizationHeader = () => {
  http.defaults.headers.Authorization = ''
}


export const axiosBaseQuery = () => async ({ url, method, data }) => {
  try {
    const result = await http({ url, method, data })
    return { data: result }
  } catch (axiosError) {
    let err = axiosError
    return {
      error: { status: err?.status, data: err?.data },
    }
  }
}

// set token header from localStorage
const userStorage = getStoreItem(STORAGE_KEYS.USER)
if (userStorage) {
  setAuthorizationHeader(userStorage.accessToken)
}

export default http
