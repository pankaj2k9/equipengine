import { client } from "./API"
import store from "../store"

// Add token for every request if provided
client.interceptors.request.use(config => {
  // TODO ask DJ if it is more important to have badly implemented remember be functionallity
  const { auth } = store.getState()
  if (auth && auth.token) {
    config.headers.authorization = auth.token
  }
  return Promise.resolve(config)
})

/**
 * @returns user info, role and token
 */
export const login = ({ email, password }) =>
  client
    .post(`/api/v1/sessions`, { email, password })
    .then(response => response.data)

/**
 * Logout user authorization token
 * @returns successfull true/false
 */
export const logout = () =>
  client.delete(`/api/v1/sessions`).then(response => response.data)
