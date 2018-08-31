import { client } from "./API"
import { ACTIVE_USER_STATUS, STUDENT_ROLE } from "./constants"
import R from "ramda"

/**
 * @returns list of all app users
 */
export const fetchUsers = ({
  organization_id,
  group_id,
  role,
  term,
  current_page,
  current_count
}) => {
  const params = {}

  if (current_page) {
    params.current_page = current_page
  }

  if (current_count) {
    params.current_count = current_count
  }

  if (organization_id) {
    params.organization_id = organization_id
  }

  if (group_id) {
    params.group_id = group_id
  }

  if (!R.isNil(role)) {
    params.roles = role
    if (R.isEmpty(role)) {
      params.roles = null
    }
  }

  if (term) {
    params.term = term
  }

  return client.get(`/api/v1/users`, { params }).then(response => response.data)
}

/**
 * @returns create user with no organization and reset password link
 */
export const createUser = async ({
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
  phone_number = "",
  organization_ids = [1]
} = {}) => {
  const response = await client.post(`/api/v1/users`, {
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
    organization_ids
  })
  return response.data
}

export const updateUser = async (
  id,
  {
    first_name,
    last_name,
    email,
    password,
    password_confirmation,
    address = "",
    date_of_birth,
    avatar = {},
    country_id = 0,
    state_id = 0,
    zip_code = "",
    phone_number = "",
    organization_ids = [1],
    participated_group_ids
  }
) => {
  const response = await client.put(`/api/v1/users/${id}`, {
    user: {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
      address,
      date_of_birth,
      avatar,
      country_id,
      state_id,
      zip_code,
      phone_number,
      organization_ids,
      participated_group_ids
    }
  })
  return response.data
}

/**
 * Attach user to organization
 * @returns organization settings of current user
 */
export const createOrganizationUser = async ({
  user_id,
  organization_id,
  role = STUDENT_ROLE,
  status = ACTIVE_USER_STATUS
}) => {
  const response = await client.post(`/api/v1/organization_users`, {
    user_id,
    organization_id,
    role,
    status,
    exclude_students_ids: [],
    files_controll_enabled: true,
    messanger_access_enabled: true,
    activity_course_ids: [],
    activity_student_ids: []
  })
  return response.data
}

/**
 * Update organization uer details
 * @returns updated organization settings of current user
 */
export const updateOrganizationUser = async (
  id,
  {
    user_id,
    organization_id,
    role = STUDENT_ROLE,
    status = ACTIVE_USER_STATUS,
    exclude_students_ids = [],
    files_controll_enabled = true,
    messanger_access_enabled = true,
    activity_course_ids = [],
    activity_student_ids = []
  }
) => {
  const response = await client.put(`/api/v1/organization_users/${id}`, {
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
  return response.data
}
