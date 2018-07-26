import { client } from "./API"
import { ACTIVE_USER_STATUS, STUDENT_ROLE } from "./constants"

/**
 * @returns list of all app users
 */
export const fetchUsers = ({ organization_id, group_id, role, term }) => {
  const params = {
    // TODO implement inifinite loading
    current_count: 100
  }

  if (organization_id) {
    params.organization_id = organization_id
  }

  if (group_id) {
    params.group_id = group_id
  }

  if (role) {
    params.role = role
  }

  if (term) {
    params.term = term
  }

  return client.get(`/api/v1/users`, { params }).then(response => response.data)
}

/**
 * @returns create user with no organization and reset password link
 */
export const createUser = ({
  first_name,
  last_name,
  email,
  password,
  password_confirmation,
  address = "",
  avatar = {},
  country_id = 0,
  state_id = 0,
  zip_code = "",
  phone_number = ""
}) =>
  client
    .post(`/api/v1/users`, {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
      address,
      avatar,
      country_id,
      state_id,
      zip_code,
      phone_number,
      organization_ids: [1]
    })
    .then(response => response.data)

/**
 * Attach user to organization
 * @returns organization settings of current user
 */
export const createOrganizationUser = ({
  user_id,
  role = STUDENT_ROLE,
  status = ACTIVE_USER_STATUS
}) =>
  client
    .post(`/api/v1/organization_users`, {
      user_id,
      role,
      status,
      exclude_students_ids: [],
      files_controll_enabled: true,
      messanger_access_enabled: true,
      activity_course_ids: [],
      activity_student_ids: []
    })
    .then(response => response.data)
