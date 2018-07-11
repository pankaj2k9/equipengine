import { client } from "./API"

export const ACTIVE_GROUP_STATUS = "active"
export const PAUSE_GROUP_STATUS = "pause"

export const fetchMyGroups = () => fetchGroups({ my: true })

// TODO think about pagination, cause it is implemented in API, but not in UI
/**
 * @returns list of available to user groups
 */
export const fetchGroups = ({ my = false, status }) =>
  client
    .get(`/api/v1/groups`, { params: { my, status } })
    .then(response => response.data)
