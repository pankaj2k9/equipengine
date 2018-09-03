import { client } from "./API"

/**
 *
 * fetch files without file content by type and id (like group type and group id)
 */
export const fetchAttachments = ({
  attachmentable_id,
  attachmentable_type,
  pagination,
  term
}) => {
  const params = {}
  if (term) params.term = term
  if (pagination) params.current_page = pagination
  return client
    .get(`api/v1/${attachmentable_type}/${attachmentable_id}/attachments`, {
      params
    })
    .then(response => response.data)
}
