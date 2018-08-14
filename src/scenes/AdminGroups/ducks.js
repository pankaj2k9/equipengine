import Immutable from "seamless-immutable"
import { createSelector } from "reselect"

// Types
export const types = {
  //
  // FETCH_GROUPS
  //
  FETCH_GROUPS_REQUEST: "equipengine/FETCH_GROUPS_REQUEST",
  FETCH_GROUPS_SUCCESS: "equipengine/FETCH_GROUPS_SUCCESS",
  FETCH_GROUPS_ERROR: "equipengine/FETCH_GROUPS_ERROR",

  //
  // CREATE_GROUP
  //
  CREATE_GROUP_REQUEST: "equipengine/CREATE_GROUP_REQUEST",
  CREATE_GROUP_SUCCESS: "equipengine/CREATE_GROUP_SUCCESS",
  CREATE_GROUP_ERROR: "equipengine/CREATE_GROUP_ERROR"
}

const initialState = Immutable({
  isFetchingGroups: false,
  groups: [],
  pagination: null,
  isSavingGroup: false
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_GROUPS
    //
    case types.FETCH_GROUPS_REQUEST:
      return state.merge({
        isFetchingGroups: true
      })
    case types.FETCH_GROUPS_SUCCESS:
      return state.merge({
        isFetchingGroups: false,
        groups: action.payload.groups
      })
    case types.FETCH_GROUPS_ERROR:
      return state.merge({
        isFetchingGroups: false,
        groups: []
      })

    //
    // CREATE_GROUP
    //
    case types.CREATE_GROUP_REQUEST:
      return state.merge({
        isSavingGroup: true
      })
    case types.CREATE_GROUP_SUCCESS:
      return state.merge({
        isSavingGroup: false,
        groups: state.groups.concat(action.payload.group)
      })
    case types.CREATE_GROUP_ERROR:
      return state.merge({
        isSavingGroup: false
      })

    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // FETCH_GROUPS
  //
  fetchGroupsRequest: ({ term }) => ({
    type: types.FETCH_GROUPS_REQUEST,
    payload: { term }
  }),
  fetchGroupsSuccess: ({ groups, pagination }) => ({
    type: types.FETCH_GROUPS_SUCCESS,
    payload: { groups, pagination }
  }),
  fetchGroupsError: () => ({
    type: types.FETCH_GROUPS_ERROR
  }),

  //
  // CREATE_GROUP
  //
  createGroupRequest: () => ({
    type: types.CREATE_GROUP_REQUEST
  }),
  createGroupSuccess: ({ group }) => ({
    type: types.CREATE_GROUP_SUCCESS,
    payload: { group }
  }),
  createGroupError: () => ({
    type: types.CREATE_GROUP_ERROR
  })
}

// Selectors
const groupsSelector = () => state => state.adminGroups

const selectGroups = () =>
  createSelector(groupsSelector(), groups => groups.groups)

const selectIsFetchingGroups = () =>
  createSelector(groupsSelector(), groups => groups.isFetchingGroups)

const selectIsSavingGroup = () =>
  createSelector(groupsSelector(), groups => groups.isSavingGroup)

export const selectors = {
  selectIsFetchingGroups,
  selectIsSavingGroup,
  selectGroups
}
