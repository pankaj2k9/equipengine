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
  ADD_USERS_TO_GROUP_ERROR: "equipengine-admin/ADD_USERS_TO_GROUP_ERROR",
  //
  // SELECT_GROUP_USER
  //
  SELECT_GROUP_USER: "equipengine-admin/SELECT_GROUP_USER",
  //
  // DELETE_GROUP_USER
  //
  DELETE_GROUP_USER_REQUEST: "equipengine-admin/DELETE_GROUP_USER_REQUEST",
  DELETE_GROUP_USER_SUCCESS: "equipengine-admin/DELETE_GROUP_USER_SUCCESS",
  DELETE_GROUP_USER_ERROR: "equipengine-admin/DELETE_GROUP_USER_ERROR",
  //
  // UPDATE_GROUP_USER_STATUS
  //
  UPDATE_GROUP_USER_STATUS_REQUEST:
    "equipengine-admin/UPDATE_GROUP_USER_STATUS_REQUEST",
  UPDATE_GROUP_USER_STATUS_SUCCESS:
    "equipengine-admin/UPDATE_GROUP_USER_STATUS_SUCCESS",
  UPDATE_GROUP_USER_STATUS_ERROR:
    "equipengine-admin/UPDATE_GROUP_USER_STATUS_ERROR"
}

const initialState = Immutable({
  groupUsers: [],
  groupUsersPagination: null,
  isAddingUsersToGroup: false,
  isDeletingUsersFromGroup: false,
  isUpdatingUserGroupStatus: false,
  selectedGroupUsers: []
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

    //
    // SELECT_GROUP_USER
    //
    case types.SELECT_GROUP_USER:
      return state.selectedGroupUsers.some(user => user === action.payload.id)
        ? state.merge({
            selectedGroupUsers: state.selectedGroupUsers.filter(
              item => item !== action.payload.id
            )
          })
        : state.merge({
            selectedGroupUsers: [...state.selectedGroupUsers, action.payload.id]
          })

    //
    // DELETE_GROUP_USER
    //
    case types.DELETE_GROUP_USER_ERROR:
      return state.merge({
        isDeletingUsersFromGroup: false
      })
    case types.DELETE_GROUP_USER_REQUEST:
      return state.merge({
        isDeletingUsersFromGroup: true
      })
    case types.DELETE_GROUP_USER_SUCCESS: {
      const { groupUser } = action.payload

      return state.merge({
        isDeactivating: false,
        groupUsers: state.groupUsers.filter(user => user.id !== groupUser.id)
      })
    }

    //
    // UPDATE_GROUP_USER_STATUS
    //
    case types.UPDATE_GROUP_USER_STATUS_ERROR:
      return state.merge({ isUpdatingUserGroupStatus: false })

    case types.UPDATE_GROUP_USER_STATUS_REQUEST:
      return state.merge({ isUpdatingUserGroupStatus: true })

    case types.UPDATE_GROUP_USER_STATUS_SUCCESS: {
      const { groupUser } = action.payload

      const index = state.groupUsers.findIndex(user => user.id === groupUser.id)

      const groupUsers = Immutable(state.groupUsers).asMutable()

      groupUsers.splice(index, 1, groupUser)

      return state.merge({
        isUpdatingUserGroupStatus: false,
        groupUsers,
        selectedGroupUsers: []
      })
    }

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
  }),
  //
  // SELECT_GROUP_USER
  //
  selectGroupUser: id => ({
    type: types.SELECT_GROUP_USER,
    payload: { id }
  }),
  //
  // DELETE_GROUP_USER
  //
  deleteGroupUserError: () => ({
    type: types.DELETE_GROUP_USER_ERROR
  }),
  deleteGroupUserRequest: () => ({
    type: types.DELETE_GROUP_USER_REQUEST
  }),
  deleteGroupUserSuccess: ({ groupUser }) => ({
    type: types.DELETE_GROUP_USER_SUCCESS,
    payload: { groupUser }
  }),
  //
  // UPDATE_GROUP_USER_STATUS
  //
  updateGroupUserStatusError: () => ({
    type: types.UPDATE_GROUP_USER_STATUS_ERROR
  }),
  updateGroupUserStatusRequest: () => ({
    type: types.UPDATE_GROUP_USER_STATUS_REQUEST
  }),
  updateGroupUserStatusSuccess: ({ groupUser }) => ({
    type: types.UPDATE_GROUP_USER_STATUS_SUCCESS,
    payload: { groupUser }
  })
}
