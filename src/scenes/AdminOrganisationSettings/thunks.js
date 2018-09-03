import * as API from "services/API"
import { ADMIN_ROLE, STUDENT_ROLE, TEACHER_ROLE } from "services/constants"
import { actions as organizationActions } from "./ducks"

export const fetchOrganization = id => {
  return async dispatch => {
    dispatch(organizationActions.fetchOrganizationRequest())

    try {
      const { organization } = await API.fetchOrganization(id)

      return dispatch(
        organizationActions.fetchOrganizationSuccess({
          organization
        })
      )
    } catch (error) {
      return dispatch(organizationActions.fetchOrganizationError())
    }
  }
}

export const changeOrganization = ({ id, organization }) => {
  return async dispatch => {
    dispatch(organizationActions.changeOrganizationRequest())

    try {
      const data = await API.changeOrganization({
        id,
        organization
      })

      return dispatch(
        organizationActions.changeOrganizationSuccess({
          organization: data.organization
        })
      )
    } catch (error) {
      return dispatch(organizationActions.changeOrganizationError())
    }
  }
}

export const fetchAdmins = ({ current_page }) => {
  return async dispatch => {
    dispatch(
      organizationActions.fetchOrganizationAdminsRequest({ current_page })
    )

    try {
      const { users, meta } = await API.fetchUsers({
        roles: ADMIN_ROLE,
        current_page
      })

      return dispatch(
        organizationActions.fetchOrganizationAdminsSuccess({
          users,
          pagination: meta
        })
      )
    } catch (error) {
      return dispatch(organizationActions.fetchOrganizationAdminsError())
    }
  }
}

export const fetchNonAdmins = ({ current_page, term }) => {
  return async dispatch => {
    dispatch(
      organizationActions.fetchOrganizationNonAdminsRequest({ current_page })
    )

    try {
      const { users, meta } = await API.fetchUsers({
        roles: `${STUDENT_ROLE},${TEACHER_ROLE}`,
        current_page,
        term
      })

      return dispatch(
        organizationActions.fetchOrganizationNonAdminsSuccess({
          users,
          pagination: meta
        })
      )
    } catch (error) {
      return dispatch(organizationActions.fetchOrganizationNonAdminsError())
    }
  }
}

export const updateOrganizationNonAdmin = ({ id }) => {
  return async dispatch => {
    dispatch(organizationActions.updateOrganizationNonAdminRequest())

    try {
      const { organization_user } = await API.updateOrganizationAdmin({
        id,
        role: STUDENT_ROLE
      })

      return dispatch(
        organizationActions.updateOrganizationNonAdminSuccess({
          user: organization_user
        })
      )
    } catch (error) {
      return dispatch(organizationActions.updateOrganizationNonAdminError())
    }
  }
}

export const updateOrganizationAdmin = ({ id }) => {
  return async dispatch => {
    dispatch(organizationActions.updateOrganizationAdminRequest())

    try {
      const { organization_user } = await API.updateOrganizationAdmin({
        id,
        role: ADMIN_ROLE
      })

      return dispatch(
        organizationActions.updateOrganizationAdminSuccess({
          user: organization_user
        })
      )
    } catch (error) {
      return dispatch(organizationActions.updateOrganizationAdminError())
    }
  }
}
