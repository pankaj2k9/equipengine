import * as API from "services/API"
import { actions as groupUsersActions } from "./ducks"

export const fetchGroupUsers = ({ groupId, role, term }) => {
  return async dispatch => {
    dispatch(
      groupUsersActions.fetchGroupUsersRequest({ searchTerm: term, role })
    )
    try {
      const { users, meta } = await API.fetchUsers({
        group_id: groupId,
        role,
        term
      })
      return dispatch(
        groupUsersActions.fetchGroupUsersSuccess({
          users: users,
          pagination: meta
        })
      )
    } catch (error) {
      dispatch(groupUsersActions.fetchGroupUsersError())
    }
  }
}
