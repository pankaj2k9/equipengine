import * as API from "services/API"
import { actions } from "./ducks"

export const fetchGroupUsers = ({ groupId }) => {
  return async dispatch => {
    try {
      dispatch(actions.fetchGroupUsersRequest())

      const response = await API.fetchGroupUsers({ group_id: groupId })

      return dispatch(
        actions.fetchGroupUsersSuccess({
          groupUsers: response.group_users,
          groupUsersPagination: response.meta
        })
      )
    } catch (error) {
      return dispatch(actions.fetchGroupUsersError())
    }
  }
}

export const addUsersToGroup = ({ groupId, users }) => {
  return async dispatch => {
    try {
      dispatch(actions.addUsersToGroupRequest())

      const newGroupUsers = []
      for (const user of users) {
        const { group_user } = await API.addUserToGroup({
          group_id: groupId,
          user_id: user.id
        })
        newGroupUsers.push(group_user)
      }

      // TODO: Need to parallelize api calls like the commented code below though API throws 500. Need that fixed.
      // const addUserToGroupPromises = []
      // for (const user of users) {
      //   addUserToGroupPromises.push(
      //     API.addUserToGroup({
      //       group_id: groupId,
      //       user_id: user.id
      //     })
      //   )
      // }
      // const responses = await Promise.all(addUserToGroupPromises)

      return dispatch(actions.addUsersToGroupSuccess({ users: newGroupUsers }))
    } catch (error) {
      return dispatch(actions.addUsersToGroupError())
    }
  }
}

export const deleteGroupUser = ({ groupId, id }) => {
  return async dispatch => {
    try {
      dispatch(actions.deleteGroupUserRequest())

      const { group_user } = await API.deleteGroupUser({ groupId, id })

      return dispatch(actions.deleteGroupUserSuccess({ groupUser: group_user }))
    } catch (error) {
      return dispatch(actions.deleteGroupUserError({ error }))
    }
  }
}

export const updateGroupUserStatus = ({ groupId, id, status }) => {
  return async dispatch => {
    try {
      dispatch(actions.updateGroupUserStatusRequest())

      const { group_user } = await API.updateGroupUserStatus({
        groupId,
        id,
        status
      })

      return dispatch(
        actions.updateGroupUserStatusSuccess({ groupUser: group_user })
      )
    } catch (error) {
      return dispatch(actions.updateGroupUserStatusError({ error }))
    }
  }
}
