import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // FETCH_USERS
  //
  FETCH_USERS_REQUEST: "equipengine-admin/FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS: "equipengine-admin/FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR: "equipengine-admin/FETCH_USERS_ERROR",
  //
  // CREATE_USER
  //
  CREATE_USER_REQUEST: "equipengine-admin/CREATE_USER_REQUEST",
  CREATE_USER_SUCCESS: "equipengine-admin/CREATE_USER_SUCCESS",
  CREATE_USER_ERROR: "equipengine-admin/CREATE_USER_ERROR",
  //
  // UPDATE_USER
  //
  UPDATE_USER_REQUEST: "equipengine/UPDATE_USER_REQUEST",
  UPDATE_USER_SUCCESS: "equipengine/UPDATE_USER_SUCCESS",
  UPDATE_USER_ERROR: "equipengine/UPDATE_USER_ERROR",
  //
  // SELECT_USER
  //
  SELECT_USER: "equipengine-admin/SELECT_USER",
  //
  // SEND_RESET_PASSWORD_TOKEN
  //
  SEND_RESET_PASSWORD_TOKEN_REQUEST:
    "equipengine-admin/SEND_RESET_PASSWORD_TOKEN_REQUEST",
  SEND_RESET_PASSWORD_TOKEN_SUCCESS:
    "equipengine-admin/SEND_RESET_PASSWORD_TOKEN_SUCCESS",
  SEND_RESET_PASSWORD_TOKEN_ERROR:
    "equipengine-admin/SEND_RESET_PASSWORD_TOKEN_ERROR"
}

const initialState = Immutable({
  isFetchingUsers: false,
  isSavingUser: false,
  isSendingResetPasswordToken: false,
  users: [],
  pagination: null,
  searchTerm: "",
  selectedUserId: null
})

// TODO change user list to map
// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_USERS
    //
    case types.FETCH_USERS_REQUEST:
      return state.merge({
        isFetchingUsers: true,
        searchTerm: action.payload.searchTerm
      })
    case types.FETCH_USERS_SUCCESS:
      return state.merge({
        isFetchingUsers: false,
        users: action.payload.users
      })
    case types.FETCH_USERS_ERROR:
      return state.merge({
        isFetchingUsers: false,
        users: []
      })

    //
    // CREATE_USERS
    //
    case types.CREATE_USER_REQUEST:
      return state.merge({
        isSavingUser: true
      })
    case types.CREATE_USER_SUCCESS:
      return state.merge({
        isSavingUser: false,
        users: state.users.concat(action.payload.user)
      })
    case types.CREATE_USER_ERROR:
      return state.merge({
        isSavingUser: false
      })

    //
    // UPDATE_USERS
    //
    case types.UPDATE_USER_REQUEST:
      return state.merge({
        isUpdatingUser: true
      })
    case types.UPDATE_USER_SUCCESS:
      return state.merge({
        isUpdatingUser: false,
        users: state.users.update(
          state.users.findIndex(user => user.id === action.payload.user.id),
          prevUser => action.payload.user
        )
      })
    case types.UPDATE_USER_ERROR:
      return state.merge({
        isUpdatingUser: false
      })

    //
    // SELECT_USER
    //
    case types.SELECT_USER:
      return state.merge({
        selectedUserId: action.payload.userId
      })

    //
    // SEND_RESET_PASSWORD_TOKEN
    //
    case types.SEND_RESET_PASSWORD_TOKEN_REQUEST:
      return state.merge({
        isSendingResetPasswordToken: true
      })
    case types.SEND_RESET_PASSWORD_TOKEN_SUCCESS:
      return state.merge({
        isSendingResetPasswordToken: false
      })
    case types.SEND_RESET_PASSWORD_TOKEN_ERROR:
      return state.merge({
        isSendingResetPasswordToken: false
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // FETCH_USERS
  //
  fetchUsersRequest: ({ searchTerm }) => ({
    type: types.FETCH_USERS_REQUEST,
    payload: { searchTerm }
  }),
  fetchUsersSuccess: ({ users, pagination }) => ({
    type: types.FETCH_USERS_SUCCESS,
    payload: { users, pagination }
  }),
  fetchUsersError: () => ({
    type: types.FETCH_USERS_ERROR
  }),
  //
  // CREATE_USERS
  //
  createUserRequest: () => ({
    type: types.CREATE_USER_REQUEST
  }),
  createUserSuccess: ({ user }) => ({
    type: types.CREATE_USER_SUCCESS,
    payload: { user }
  }),
  createUserError: () => ({
    type: types.CREATE_USER_ERROR
  }),
  //
  // UPDATE_USER
  //
  updateUserRequest: () => ({
    type: types.UPDATE_USER_REQUEST
  }),
  updateUserSuccess: ({ user }) => ({
    type: types.UPDATE_USER_SUCCESS,
    payload: { user }
  }),
  updateUserError: () => ({
    type: types.UPDATE_USER_ERROR
  }),
  //
  // SELECT_USER
  //
  selectUser: ({ userId }) => ({
    type: types.SELECT_USER,
    payload: { userId }
  }),
  //
  // SEND_RESET_PASSWORD_TOKEN
  //
  sendResetPasswordTokenRequest: () => ({
    type: types.SEND_RESET_PASSWORD_TOKEN_REQUEST
  }),
  sendResetPasswordTokenSuccess: () => ({
    type: types.SEND_RESET_PASSWORD_TOKEN_SUCCESS
  }),
  sendResetPasswordTokenError: () => ({
    type: types.SEND_RESET_PASSWORD_TOKEN_ERROR
  })
}

// Selectors
const usersSelector = () => state => state.adminUsers

const selectIsFetchingUsers = () =>
  createSelector(usersSelector(), users => users.isFetchingUsers)
const selectUsers = () => createSelector(usersSelector(), users => users.users)
const selectIsSavingUser = () =>
  createSelector(usersSelector(), users => users.isSavingUser)
const selectSearchTerm = () =>
  createSelector(usersSelector(), users => users.searchTerm)
const selectSelectedUser = () =>
  createSelector(
    usersSelector(),
    users =>
      users.selectedUserId &&
      users.users.find(user => user.id.toString() === users.selectedUserId)
  )
const selectIsSendingResetPasswordToken = () =>
  createSelector(usersSelector(), users => users.isSendingResetPasswordToken)

export const selectors = {
  selectIsFetchingUsers,
  selectIsSavingUser,
  selectIsSendingResetPasswordToken,
  selectUsers,
  selectSearchTerm,
  selectSelectedUser
}
