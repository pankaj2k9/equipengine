import Immutable from "seamless-immutable"
import { createSelector } from "reselect"
import { REHYDRATE } from "redux-persist/lib/constants"
import features from "features"

import { ADMIN_ROLE, STUDENT_ROLE, TEACHER_ROLE } from "services/constants"

// Types
export const types = {
  //
  // LOGIN
  //
  LOGIN_REQUEST: "equipengine/LOGIN_REQUEST",
  LOGIN_SUCCESS: "equipengine/LOGIN_SUCCESS",
  LOGIN_ERROR: "equipengine/LOGIN_ERROR",

  //
  // LOGOUT
  //
  LOGOUT_REQUEST: "equipengine/LOGOUT_REQUEST",
  LOGOUT_SUCCESS: "equipengine/LOGOUT_SUCCESS",
  LOGOUT_ERROR: "equipengine/LOGOUT_ERROR"
}

const initialState = Immutable({
  isPendingLogin: false,
  isPendingLogout: false,
  user: null,
  token: null
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

    // Update user profile
    case features.settings.types.UPDATE_SETTINGS_SUCCESS: {
      return state.merge({
        user: action.payload.user
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
const loginSelector = () => state => state.login

// login-logout selectors
const selectIsPendingLogin = () =>
  createSelector(loginSelector(), login => login.isPendingLogin)
const selectIsPendingLogout = () =>
  createSelector(loginSelector(), login => login.isPendingLogout)
const selectCurrentUserToken = () =>
  createSelector(loginSelector(), login => login.token)
const selectIsLoggedIn = () =>
  createSelector(selectCurrentUserToken(), token => {
    if (!token) {
      return false
    }
    try {
      // Check if token is expired
      // TODO create API task to fix token expiration date (now it is 2019 year, but real is 1 day)
      const { exp } = JSON.parse(atob(token.split(".")[1]))
      return exp > Date.now() / 1000
    } catch (e) {
      return false
    }
  })
const selectIsNotLoggedIn = () =>
  createSelector(selectIsLoggedIn(), isLoggedIn => !isLoggedIn)

// current user/user role selectors
// TODO probably separate Auth and CurrentUser features
const selectCurrentUser = () =>
  createSelector(loginSelector(), login => login.user)
const selectCurrentUserId = () =>
  createSelector(selectCurrentUser(), user => user && user.id)
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
const selectIsStudent = () =>
  createSelector(selectIsInAnyRole([STUDENT_ROLE]), hasRole => hasRole)
const selectIsTeacher = () =>
  createSelector(selectIsInAnyRole([TEACHER_ROLE]), hasRole => hasRole)
const selectIsAdmin = () =>
  createSelector(selectIsInAnyRole([ADMIN_ROLE]), hasRole => hasRole)

export const selectors = {
  selectCurrentUser,
  selectCurrentUserId,
  selectCurrentUserRole,
  selectIsInAnyRole,
  selectIsAdmin,
  selectIsStudent,
  selectIsTeacher,
  selectIsLoggedIn,
  selectIsNotLoggedIn,
  selectIsPendingLogin,
  selectIsPendingLogout
}
