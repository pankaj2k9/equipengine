import * as API from "services/API"
import { actions as groupUsersActions } from "./ducks"

export const fetchGroupUsers = ({ groupId }) => {
  return async dispatch => {
    dispatch(groupUsersActions.fetchGroupUsersRequest())
    try {
      const { group_users, meta } = await API.fetchGroupUsers({ groupId })
      return dispatch(
        groupUsersActions.fetchGroupUsersSuccess({
          groupUsers: group_users,
          pagination: meta
        })
      )
    } catch (error) {
      dispatch(groupUsersActions.fetchGroupUsersError())
    }
  }
}
