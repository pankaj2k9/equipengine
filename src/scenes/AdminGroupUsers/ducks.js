import Immutable from "seamless-immutable"

// Types
export const types = {
  //
  // FETCH_GROUP_USERS
  //
  FETCH_GROUP_USERS_REQUEST: "equipengine-admin/FETCH_GROUP_USERS_REQUEST",
  FETCH_GROUP_USERS_SUCCESS: "equipengine-admin/FETCH_GROUP_USERS_SUCCESS",
  FETCH_GROUP_USERS_ERROR: "equipengine-admin/FETCH_GROUP_USERS_ERROR",
  //
  // ADD_USERS_TO_GROUP
  //
  ADD_USERS_TO_GROUP_REQUEST: "equipengine-admin/ADD_USERS_TO_GROUP_REQUEST",
  ADD_USERS_TO_GROUP_SUCCESS: "equipengine-admin/ADD_USERS_TO_GROUP_SUCCESS",
  ADD_USERS_TO_GROUP_ERROR: "equipengine-admin/ADD_USERS_TO_GROUP_ERROR"
}

const initialState = Immutable({
  groupUsers: [],
  groupUsersPagination: null,
  isAddingUsersToGroup: false
})

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // FETCH_GROUP_USERS
    //
    case types.FETCH_GROUP_USERS_REQUEST:
      return state.merge({
        isFetchingGroupUsers: true
      })
    case types.FETCH_GROUP_USERS_SUCCESS:
      return state.merge({
        isFetchingGroupUsers: false,
        groupUsers: action.payload.groupUsers
      })
    case types.FETCH_GROUP_USERS_ERROR:
      return state.merge({
        isFetchingGroupUsers: false,
        groupUsers: []
      })

    //
    // ADD_USERS_TO_GROUP
    //
    case types.ADD_USERS_TO_GROUP_REQUEST:
      return state.merge({
        isAddingUsersToGroup: true
      })
    case types.ADD_USERS_TO_GROUP_SUCCESS:
      return state.merge({
        isAddingUsersToGroup: false,
        groupUsers: state.groupUsers.concat(action.payload.users)
      })
    case types.ADD_USERS_TO_GROUP_ERROR:
      return state.merge({
        isAddingUsersToGroup: false
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
  fetchGroupUsersSuccess: ({ groupUsers, groupUsersPagination }) => ({
    type: types.FETCH_GROUP_USERS_SUCCESS,
    payload: { groupUsers, groupUsersPagination }
  }),
  fetchGroupUsersError: () => ({
    type: types.FETCH_GROUP_USERS_ERROR
  }),
  //
  // ADD_USERS_TO_GROUP
  //
  addUsersToGroupRequest: () => ({
    type: types.ADD_USERS_TO_GROUP_REQUEST
  }),
  addUsersToGroupSuccess: ({ users }) => ({
    type: types.ADD_USERS_TO_GROUP_SUCCESS,
    payload: { users }
  }),
  addUsersToGroupError: () => ({
    type: types.ADD_USERS_TO_GROUP_ERROR
  })
}
