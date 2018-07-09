import * as Auth from "services/Auth"
import { actions as authActions } from "./ducks"
import { push } from "react-router-redux"

export const login = ({ email, password }) => {
  return async dispatch => {
    dispatch(authActions.loginRequest())

    try {
      const auth = await Auth.login({ email, password })

      return dispatch(
        authActions.loginSuccess({ user: auth.user, token: auth.token })
      )
    } catch (error) {
      return dispatch(authActions.loginError())
    }
  }
}

export const logout = () => {
  return async dispatch => {
    dispatch(authActions.logoutRequest())

    try {
      await Auth.logout()

      return dispatch(authActions.logoutSuccess())
    } catch (error) {
      return dispatch(authActions.logoutError())
    } finally {
      // Redirect to start page
      dispatch(push("/"))
    }
  }
}
