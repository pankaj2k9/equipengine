import { client } from "./API"

/**
 * @returns list of users that has access to specific group
 */
export const fetchGroupUsers = ({ groupId }) => {
  return client
    .get(`/api/v1/groups/${groupId}/group_users`)
    .then(response => response.data)
}

/**
 * @returns add user to group
 */
export const addUserToGroup = ({ groupId, userId }) =>
  client
    .post(`/api/v1/groups/${groupId}/group_users`, {
      user_id: userId
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
