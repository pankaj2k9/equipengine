import { client } from "./API"

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

/**
 * Register new user and send confirmation letter to email
 * @returns user info without role and token
 */
export const signup = ({ email, password }) =>
  client
    .post(`/api/v1/registrations`, { user: { email, password } })
    .then(response => response.data)
