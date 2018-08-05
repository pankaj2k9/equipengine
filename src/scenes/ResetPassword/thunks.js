import * as API from "services/API"
import { actions } from "./ducks"

export const resetPassword = ({
  password,
  passwordConfirmation,
  resetPasswordToken
}) => {
  return async dispatch => {
    dispatch(actions.resetPasswordRequest())

    try {
      await API.resetPassword({
        password,
        password_confirmation: passwordConfirmation,
        reset_password_token: resetPasswordToken
      })

      return dispatch(actions.resetPasswordSuccess())
    } catch (error) {
      return dispatch(actions.resetPasswordError())
    }
  }
}
