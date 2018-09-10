import * as API from "services/API"
import { actions as usersActions } from "./ducks"

export const fetchUsers = ({ term, role }) => {
  return async dispatch => {
    dispatch(usersActions.fetchUsersRequest({ searchTerm: term }))

    try {
      const { users, meta } = await API.fetchUsers({ term, role })

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

export const createUser = ({
  firstName,
  lastName,
  email,
  phone,
  role,
  organizationId
}) => {
  return async dispatch => {
    dispatch(usersActions.createUserRequest())

    try {
      const { user } = await API.createUser({
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: phone
      })
      const { organization_user } = await API.createOrganizationUser({
        user_id: user.id,
        organization_id: organizationId,
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

export const updateUser = userData => {
  return async dispatch => {
    dispatch(usersActions.updateUserRequest())

    try {
      const { user } = await API.updateUser(userData)

      return dispatch(
        usersActions.updateUserSuccess({
          user
        })
      )
    } catch (error) {
      return dispatch(usersActions.updateUserError())
    }
  }
}

export const removeUser = userId => {
  return async dispatch => {
    dispatch(usersActions.removeUserRequest())

    try {
      const { user } = await API.removeUser(userId)

      return dispatch(
        usersActions.removeUserSuccess({
          user
        })
      )
    } catch (error) {
      return dispatch(usersActions.removeUserError())
    }
  }
}

export const sendResetPasswordToken = ({ id, email }) => {
  return async dispatch => {
    dispatch(usersActions.sendResetPasswordTokenRequest())

    try {
      await API.sendResetPasswordToken({
        id,
        email
      })

      return dispatch(usersActions.sendResetPasswordTokenSuccess())
    } catch (error) {
      return dispatch(usersActions.sendResetPasswordTokenError())
    }
  }
}
