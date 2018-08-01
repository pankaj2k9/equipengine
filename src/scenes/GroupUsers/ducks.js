import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

import { STUDENT_ROLE, TEACHER_ROLE } from "services/constants"

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
  groupUsers: [],
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
        isFetchingUsers: true
      })
    case types.FETCH_GROUP_USERS_SUCCESS:
      return state.merge({
        isFetchingUsers: false,
        groupUsers: action.payload.groupUsers
      })
    case types.FETCH_COURSES_ERROR:
      return state.merge({
        isFetchingUsers: false,
        groupUsers: []
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
  fetchGroupUsersRequest: () => ({
    type: types.FETCH_GROUP_USERS_REQUEST
  }),
  fetchGroupUsersSuccess: ({ groupUsers, pagination }) => ({
    type: types.FETCH_GROUP_USERS_SUCCESS,
    payload: { groupUsers, pagination }
  }),
  fetchGroupUsersError: () => ({
    type: types.FETCH_COURSES_ERROR
  })
}

// Selectors
const groupUsersSelector = () => state => state.groupUsers

const selectGroupUsers = () =>
  createSelector(groupUsersSelector(), group => group.groupUsers)
const selectGroupStudents = () =>
  createSelector(groupUsersSelector(), group =>
    group.groupUsers.filter(i => i.role === STUDENT_ROLE)
  )
const selectGroupTeachers = () =>
  createSelector(groupUsersSelector(), group =>
    group.groupUsers.filter(user => user.role === TEACHER_ROLE)
  )
const selectIsFetchingGroupUsers = () =>
  createSelector(groupUsersSelector(), group => group.isFetchingUsers)

export const selectors = {
  selectGroupUsers,
  selectGroupStudents,
  selectGroupTeachers,
  selectIsFetchingGroupUsers
}
