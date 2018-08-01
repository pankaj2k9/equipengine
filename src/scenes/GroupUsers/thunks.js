import * as API from "services/API"
import { actions as groupUsersActions } from "./ducks"

export const fetchGroupUsers = group_id => {
  return async dispatch => {
    dispatch(groupUsersActions.fetchGroupUsersRequest())
    try {
      const { group_users, meta } = await API.fetchGoupAllUser(group_id)
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
