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

/**
 * Send reset password token to user email
 * @returns successful true/false
 */
export const sendResetPasswordToken = ({ id, email }) =>
  client
    .post(`/api/v1/passwords`, { id, email })
    .then(response => response.data)

/**
 * Reset password by reset_password_token from email
 * @returns user info with token
 */
export const resetPassword = ({
  password,
  password_confirmation,
  reset_password_token
}) =>
  client
    .put(`/api/v1/passwords`, {
      password,
      password_confirmation,
      reset_password_token
    })
    .then(response => response.data)
