import { client } from "./API"
import { ACTIVE_GROUP_STATUS, PUBLIC_GROUP_VISIBILITY } from "./constants"

/**
 * @returns list of groups where user is a member
 */
export const fetchMyGroups = () => fetchGroups({ my: true })

/**
 * @returns list of all groups
 */
export const fetchGroups = params =>
  client
    .get(`/api/v1/groups`, {
      params: {
        ...params,
        current_count: 100
      }
    })
    .then(response => response.data)

/**
 * @returns created group with its settings
 */
export const createGroup = ({
  title,
  status = ACTIVE_GROUP_STATUS,
  user_limit = 10,
  visibility = PUBLIC_GROUP_VISIBILITY,
  noticeboard_enabled = true,
  student_can_post = true,
  student_can_comment = true
}) =>
  client
    .post(`/api/v1/groups`, {
      title,
      status,
      user_limit,
      visibility,
      noticeboard_enabled,
      student_can_post,
      student_can_comment
    })
    .then(response => response.data)

/**
 * @returns updated group
 */
export const updateGroup = ({ id, group }) =>
  client.put(`/api/v1/groups/${id}`, { group }).then(response => response.data)

/**
 * @returns deleted group
 */
export const deleteGroup = ({ id }) =>
  client.delete(`/api/v1/groups/${id}`).then(response => response.data)
