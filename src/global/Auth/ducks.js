import Immutable from "seamless-immutable"
import { createSelector } from "reselect"
import { REHYDRATE } from "redux-persist/lib/constants"

// Types
export const types = {
  //
  // LOGIN
  //
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",

  //
  // LOGOUT
  //
  LOGOUT_REQUEST: "LOGOUT_REQUEST",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_ERROR: "LOGOUT_ERROR"
}

const initialState = Immutable({
  isPendingLogin: false,
  user: null,
  token: null,
  isPendingLogout: false
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // LOGIN
    //
    case types.LOGIN_REQUEST:
      return state.merge({
        isPendingLogin: true
      })
    case types.LOGIN_SUCCESS:
      return state.merge({
        isPendingLogin: false,
        user: action.payload.user,
        token: action.payload.token
      })
    case types.LOGIN_ERROR:
      return state.merge({
        isPendingLogin: false
      })

    //
    // LOGOUT
    //
    case types.LOGOUT_REQUEST:
      return state.merge({
        isPendingLogout: true
      })
    case types.LOGOUT_SUCCESS:
    case types.LOGOUT_ERROR:
      return state.merge({
        isPendingLogout: false,
        user: null,
        token: null
      })

    // Do not show infinite loading when reading from localstorage to redux state
    // if user closed website when login/logout was in pending state
    case REHYDRATE: {
      return state.merge({
        isPendingLogout: false,
        isPendingLogin: false
      })
    }

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // LOGIN
  //
  loginRequest: () => ({
    type: types.LOGIN_REQUEST
  }),
  loginSuccess: ({ user, token }) => ({
    type: types.LOGIN_SUCCESS,
    payload: { user, token }
  }),
  loginError: () => ({
    type: types.LOGIN_ERROR
  }),
  //
  // LOGOUT
  //
  logoutRequest: () => ({
    type: types.LOGOUT_REQUEST
  }),
  logoutSuccess: () => ({
    type: types.LOGOUT_SUCCESS
  }),
  logoutError: () => ({
    type: types.LOGOUT_ERROR
  })
}

// Selectors
const authSelector = () => state => state.auth

// login-logout selectors
const selectIsPendingLogin = () =>
  createSelector(authSelector(), auth => auth.isPendingLogin)
const selectIsPendingLogout = () =>
  createSelector(authSelector(), auth => auth.isPendingLogout)
const selectCurrentUserToken = () =>
  createSelector(authSelector(), auth => auth.token)
const selectIsLoggedIn = () =>
  createSelector(selectCurrentUserToken(), token => !!token)
const selectIsNotLoggedIn = () =>
  createSelector(selectCurrentUserToken(), token => !token)

// current user/user role selectors
// TODO probably separate Auth and CurrentUser features
const selectCurrentUser = () =>
  createSelector(authSelector(), auth => auth.user)
const selectCurrentUserRole = () =>
  createSelector(
    selectCurrentUser(),
    user =>
      user && user.organization_settings && user.organization_settings.role
  )
const selectIsInAnyRole = roles =>
  createSelector(
    selectCurrentUserRole(),
    role => role && Array.isArray(roles) && roles.includes(role)
  )

export const selectors = {
  selectCurrentUser,
  selectCurrentUserRole,
  selectIsInAnyRole,
  selectIsLoggedIn,
  selectIsNotLoggedIn,
  selectIsPendingLogin,
  selectIsPendingLogout
}
