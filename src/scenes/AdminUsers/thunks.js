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

export const updateUser = (
  userId,
  {
    firstName,
    lastName,
    email,
    password,
    passwordConfirmation,
    address = "",
    birthDate,
    avatar = {},
    country = 0,
    state = 0,
    zipCode = "",
    phone = "",
    organizationIds = [1],
    participated_group_ids = [],
    organization_settings: {
      id,
      user_id,
      organization_id = 1,
      role,
      status,
      exclude_students_ids = [],
      files_controll_enabled = true,
      messanger_access_enabled = true,
      activity_course_ids = [],
      activity_student_ids = []
    }
  }
) => {
  return async dispatch => {
    dispatch(usersActions.createUserRequest())
    try {
      const { user } = await API.updateUser(userId, {
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirmation: passwordConfirmation,
        address,
        date_of_birth: birthDate,
        avatar,
        country_id: country,
        state_id: state,
        zip_code: zipCode,
        phone_number: phone,
        organization_ids: organizationIds,
        participated_group_ids
      })

      const { organization_user } = await API.updateOrganizationUser(id, {
        user_id,
        organization_id,
        role,
        status,
        exclude_students_ids,
        files_controll_enabled,
        messanger_access_enabled,
        activity_course_ids,
        activity_student_ids
      })

      user.organization_settings = organization_user

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
