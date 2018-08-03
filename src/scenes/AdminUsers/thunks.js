import * as API from "services/API"
import { actions as usersActions } from "./ducks"

export const fetchUsers = ({ term }) => {
  return async dispatch => {
    dispatch(usersActions.fetchUsersRequest({ searchTerm: term }))

    try {
      const { users, meta } = await API.fetchUsers({ term })

      return dispatch(
        usersActions.fetchUsersSuccess({
          users,
          pagination: meta
        })
      )
    } catch (error) {
      return dispatch(usersActions.fetchUsersError())
    }
  }
}

export const createUser = ({ firstName, lastName, email, role }) => {
  return async dispatch => {
    dispatch(usersActions.createUserRequest())

    try {
      const { user } = await API.createUser({
        first_name: firstName,
        last_name: lastName,
        email
      })
      const { organization_user } = await API.createOrganizationUser({
        user_id: user.id,
        role
      })
      user.organization_settings = organization_user

      return dispatch(
        usersActions.createUserSuccess({
          user
        })
      )
    } catch (error) {
      return dispatch(usersActions.createUserError())
    }
  }
}
