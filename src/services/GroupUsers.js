import { client } from "./API"

export const fetchGoupAllUser = ({ group_id }) => {
  return client
    .get(`/api/v1/groups/${group_id}/group_users`)
    .then(response => response.data)
}
