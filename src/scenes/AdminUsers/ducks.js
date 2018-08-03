import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // FETCH_USERS
  //
  FETCH_USERS_REQUEST: "equipengine/FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS: "equipengine/FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR: "equipengine/FETCH_USERS_ERROR",
  //
  // CREATE_USER
  //
  CREATE_USER_REQUEST: "equipengine/CREATE_USER_REQUEST",
  CREATE_USER_SUCCESS: "equipengine/CREATE_USER_SUCCESS",
  CREATE_USER_ERROR: "equipengine/CREATE_USER_ERROR"
}

const initialState = Immutable({
  isFetchingUsers: false,
  users: [],
  pagination: null,
  searchTerm: "",
  isSavingUser: false
})

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
  // FETCH_USERS
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

export const selectors = {
  selectIsFetchingUsers,
  selectIsSavingUser,
  selectUsers,
  selectSearchTerm
}
