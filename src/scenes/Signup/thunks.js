import * as API from "services/API"
import { actions as signupActions } from "./ducks"
import { push } from "react-router-redux"

export const signup = ({ email, password }) => {
  return async dispatch => {
    dispatch(signupActions.signupRequest())

    try {
      await API.signup({ email, password })

      // Redirect to verify email page
      dispatch(push("/verify-email"))

      return dispatch(signupActions.signupSuccess())
    } catch (error) {
      return dispatch(signupActions.signupError())
    }
  }
}
