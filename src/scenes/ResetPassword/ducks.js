import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // RESET PASSWORD
  //
  RESET_PASSWORD_REQUEST: "equipengine/RESET_PASSWORD_REQUEST",
  RESET_PASSWORD_SUCCESS: "equipengine/RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_ERROR: "equipengine/RESET_PASSWORD_ERROR"
}

const initialState = Immutable({
  isSendingPassword: false
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // RESET PASSWORD
    //
    case types.RESET_PASSWORD_REQUEST:
      return state.merge({
        isSendingPassword: true
      })
    case types.RESET_PASSWORD_SUCCESS:
      return state.merge({
        isSendingPassword: false
      })
    case types.RESET_PASSWORD_ERROR:
      return state.merge({
        isSendingPassword: false
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // RESET PASSWORD
  //
  resetPasswordRequest: () => ({
    type: types.RESET_PASSWORD_REQUEST
  }),
  resetPasswordSuccess: () => ({
    type: types.RESET_PASSWORD_SUCCESS
  }),
  resetPasswordError: () => ({
    type: types.RESET_PASSWORD_ERROR
  })
}

// Selectors
const resetPasswordSelector = () => state => state.resetPassword

const selectIsSendingPassword = () =>
  createSelector(
    resetPasswordSelector(),
    resetPassword => resetPassword.isSendingPassword
  )

export const selectors = {
  selectIsSendingPassword
}
