import { client } from "./API"

/**
 * fetch files without file content by type and id (like group type and group id)
 */
export const fetchGroupActivities = ({
  notifiable_id,
  notifiable_type,
  pagination,
  term
}) => {
  return client
    .get(`api/v1/${notifiable_type}/${notifiable_id}/activities`, {
      params: {
        ...pagination
      }
    })
    .then(response => response.data)
}
