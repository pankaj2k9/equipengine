import { client } from "./API"
import { USER_ACTIVITY_TYPE } from "./constants"

/**
 * @param userId id of user (not email)
 * @param type User or Group
 * @returns list of user/group activities
 */
export const fetchActivities = ({ userId, type = USER_ACTIVITY_TYPE }) =>
  client
    .get(`/api/v1/${type}/${userId}/activities`)
    .then(response => response.data)
