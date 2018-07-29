import * as API from "services/API"
import { actions as loginActions } from "./ducks"
import { push } from "react-router-redux"

export const login = ({ email, password }) => {
  return async dispatch => {
    dispatch(loginActions.loginRequest())

    try {
      const auth = await API.login({ email, password })

      return dispatch(
        loginActions.loginSuccess({ user: auth.user, token: auth.token })
      )
    } catch (error) {
      return dispatch(loginActions.loginError())
    }
  }
}

export const logout = () => {
  return async dispatch => {
    dispatch(loginActions.logoutRequest())

    try {
      await API.logout()

      return dispatch(loginActions.logoutSuccess())
    } catch (error) {
      return dispatch(loginActions.logoutError())
    } finally {
      // Redirect to start page
      dispatch(push("/"))
    }
  }
}
