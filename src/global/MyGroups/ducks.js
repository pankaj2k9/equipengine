import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // FETCH_MY_GROUPS
  //
  FETCH_MY_GROUPS_REQUEST: "FETCH_MY_GROUPS_REQUEST",
  FETCH_MY_GROUPS_SUCCESS: "FETCH_MY_GROUPS_SUCCESS",
  FETCH_MY_GROUPS_ERROR: "FETCH_MY_GROUPS_ERROR"
}

const initialState = Immutable({
  isFetchingMyGroups: false,
  myGroups: [],
  pagination: null
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_MY_GROUPS
    //
    case types.FETCH_MY_GROUPS_REQUEST:
      return state.merge({
        isFetchingMyGroups: true
      })
    case types.FETCH_MY_GROUPS_SUCCESS:
      return state.merge({
        isFetchingMyGroups: false,
        myGroups: action.payload.myGroups
      })
    case types.FETCH_MY_GROUPS_ERROR:
      return state.merge({
        isFetchingMyGroups: false,
        myGroups: []
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // FETCH_MY_GROUPS
  //
  fetchMyGroupsRequest: () => ({
    type: types.FETCH_MY_GROUPS_REQUEST
  }),
  fetchMyGroupsSuccess: ({ myGroups, pagination }) => ({
    type: types.FETCH_MY_GROUPS_SUCCESS,
    payload: { myGroups, pagination }
  }),
  fetchMyGroupsError: () => ({
    type: types.FETCH_MY_GROUPS_ERROR
  })
}

// Selectors
const myGroupsSelector = () => state => state.myGroups

const selectIsFetchingMyGroups = () =>
  createSelector(myGroupsSelector(), myGroups => myGroups.isFetchingMyGroups)
const selectMyGroups = () =>
  createSelector(myGroupsSelector(), myGroups => myGroups.myGroups)

export const selectors = { selectIsFetchingMyGroups, selectMyGroups }
