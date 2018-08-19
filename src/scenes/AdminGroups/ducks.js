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
  CREATE_GROUP_ERROR: "equipengine/CREATE_GROUP_ERROR",
  //
  // SELECT_GROUP
  //
  SELECT_GROUP: "equipengine/SELECT_GROUP",
  //
  // UPDATE_GROUP
  //
  UPDATE_GROUP_ERROR: "equipengine/UPDATE_GROUP_ERROR",
  UPDATE_GROUP_REQUEST: "equipengine/UPDATE_GROUP_REQUEST",
  UPDATE_GROUP_SUCCESS: "equipengine/UPDATE_GROUP_SUCCESS"
}

const initialState = Immutable({
  group: {},
  groups: [],
  isFetchingGroups: false,
  isSavingGroup: false,
  isUpdatingGroup: false,
  pagination: null
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

    //
    // SELECT_GROUP
    //
    case types.SELECT_GROUP:
      return state.merge({ group: action.payload.group })

    //
    // UPDATE_GROUP
    //
    case types.UPDATE_GROUP_ERROR:
      return state.merge({ isUpdatingGroup: false })

    case types.UPDATE_GROUP_REQUEST:
      return state.merge({ isUpdatingGroup: true })

    case types.UPDATE_GROUP_SUCCESS: {
      const { group } = action.payload

      const groups = Immutable(state.groups).asMutable()
      const index = groups.findIndex(item => item.id === group.id)

      groups.slice(index, 1, group)

      return state.merge({ group, groups, isUpdatingGroup: false })
    }

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
  }),

  //
  // SELECT_GROUP
  //
  selectGroup: ({ group }) => ({
    type: types.SELECT_GROUP,
    payload: { group }
  }),

  //
  // UPDATE_GROUP
  //
  updateGroupError: () => ({
    type: types.UPDATE_GROUP_ERROR
  }),
  updateGroupRequest: () => ({
    type: types.UPDATE_GROUP_REQUEST
  }),
  updateGroupSuccess: ({ group }) => ({
    type: types.UPDATE_GROUP_SUCCESS,
    payload: { group }
  })
}

// Selectors
const groupsSelector = () => state => state.adminGroups

const selectGroup = () => createSelector(groupsSelector(), state => state.group)

const selectGroups = () =>
  createSelector(groupsSelector(), state => state.groups)

const selectIsFetchingGroups = () =>
  createSelector(groupsSelector(), state => state.isFetchingGroups)

const selectIsSavingGroup = () =>
  createSelector(groupsSelector(), state => state.isSavingGroup)

const selectIsUpdatingGroup = () =>
  createSelector(groupsSelector(), state => state.isUpdatingGroup)

export const selectors = {
  selectGroup,
  selectGroups,
  selectIsFetchingGroups,
  selectIsSavingGroup,
  selectIsUpdatingGroup
}
