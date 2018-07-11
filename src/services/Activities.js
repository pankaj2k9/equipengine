import { client } from "./API"

export const USER_ACTIVITY_TYPE = "User"
export const GROUP_ACTIVITY_TYPE = "Group"

/**
 * @param userId id of user (not email)
 * @param type User or Group
 * @returns list of user/group activities
 */
export const fetchActivities = ({ userId, type = USER_ACTIVITY_TYPE }) =>
  client
    .get(`/api/v1/${type}/${userId}/activities`)
    .then(response => response.data)
