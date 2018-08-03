import * as API from "services/API"
import { actions } from "./ducks"

export const fetchGroupUsers = ({ groupId }) => {
  return async dispatch => {
    dispatch(actions.fetchGroupUsersRequest())

    try {
      const response = await API.fetchGroupUsers({ groupId })

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
    dispatch(actions.addUsersToGroupRequest())

    try {
      const newGroupUsers = []
      for (const user of users) {
        const { group_user } = await API.addUserToGroup({
          groupId,
          userId: user.id
        })
        newGroupUsers.push(group_user)
      }

      return dispatch(actions.addUsersToGroupSuccess({ users: newGroupUsers }))
    } catch (error) {
      return dispatch(actions.addUsersToGroupError())
    }
  }
}
