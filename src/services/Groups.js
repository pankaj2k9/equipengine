import { client } from "./API"

// TODO think about pagination, cause it is implemented in API, but not in UI
/**
 * @returns list of available to user groups
 */
export const listGroups = () =>
  client.get(`/api/v1/groups`).then(response => response.data)
