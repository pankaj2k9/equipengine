import { client } from "./API"

/**
 * @returns list of users that has access to specific group
 */
export const fetchGroupUsers = ({ group_id, student_id, current_page }) => {
  const params = student_id ? { student_id } : {}

  if (current_page) {
    params.current_count = 12
    params.current_page = current_page
  } else {
    params.current_count = 12
    params.current_page = 1
  }

  return client
    .get(`/api/v1/groups/${group_id}/group_users`, {
      params
    })
    .then(response => response.data)
}

/**
 * @returns add user to group
 */
export const addUserToGroup = ({ group_id, user_id }) =>
  client
    .post(`/api/v1/groups/${group_id}/group_users`, {
      user_id
    })
    .then(response => response.data)

/**
 * @returns delete user from group
 */
export const deleteGroupUser = ({ groupId, id }) =>
  client
    .delete(`/api/v1/groups/${groupId}/group_users/${id}`)
    .then(response => response.data)

/**
 * @returns updates user's status
 */
export const updateGroupUserStatus = ({ groupId, id, status }) =>
  client
    .put(`/api/v1/groups/${groupId}/group_users/${id}`, {
      group_user: { status }
    })
    .then(response => response.data)
