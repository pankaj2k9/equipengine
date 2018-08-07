import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // FETCH_GROUP_USERS
  //
  FETCH_GROUP_USERS_REQUEST: "equipengine/FETCH_GROUP_USERS_REQUEST",
  FETCH_GROUP_USERS_SUCCESS: "equipengine/FETCH_GROUP_USERS_SUCCESS",
  FETCH_GROUP_USERS_ERROR: "equipengine/FETCH_GROUP_USERS_ERROR"
}

const initialState = Immutable({
  isFetchingUsers: false,
  users: [],
  searchTerm: "",
  selectedRole: "",
  pagination: null
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_GROUP_USERS
    //
    case types.FETCH_GROUP_USERS_REQUEST:
      return state.merge({
        isFetchingUsers: true,
        searchTerm: action.payload.searchTerm,
        selectedRole: action.payload.role
      })
    case types.FETCH_GROUP_USERS_SUCCESS:
      return state.merge({
        isFetchingUsers: false,
        users: action.payload.users
      })
    case types.FETCH_COURSES_ERROR:
      return state.merge({
        isFetchingUsers: false,
        users: []
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // FETCH_GROUP_USERS
  //
  fetchGroupUsersRequest: ({ searchTerm, role }) => ({
    type: types.FETCH_GROUP_USERS_REQUEST,
    payload: { searchTerm, role }
  }),
  fetchGroupUsersSuccess: ({ users, pagination }) => ({
    type: types.FETCH_GROUP_USERS_SUCCESS,
    payload: { users, pagination }
  }),
  fetchGroupUsersError: () => ({
    type: types.FETCH_COURSES_ERROR
  })
}

// Selectors
const groupUsersSelector = () => state => state.groupUsers

const selectGroupUsers = () =>
  createSelector(groupUsersSelector(), group => group.users)

const selectIsFetchingGroupUsers = () =>
  createSelector(groupUsersSelector(), group => group.isFetchingUsers)

const selectSearchTerm = () =>
  createSelector(groupUsersSelector(), group => group.searchTerm)

const selectCurrentRole = () =>
  createSelector(groupUsersSelector(), group => group.selectedRole)

export const selectors = {
  selectGroupUsers,
  selectIsFetchingGroupUsers,
  selectSearchTerm,
  selectCurrentRole
}
