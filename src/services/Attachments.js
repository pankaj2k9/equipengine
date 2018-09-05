import { client } from "./API"

/**
 * fetch files without file content by type and id (like group type and group id)
 */
export const fetchAttachments = ({
  attachmentable_id,
  attachmentable_type,
  pagination,
  term
}) => {
  return client
    .get(`api/v1/${attachmentable_type}/${attachmentable_id}/attachments`, {
      params: {
        ...pagination,
        term
      }
    })
    .then(response => response.data)
}

/**
 * deletes attachment by id
 */
export const deleteAttachment = ({
  attachmentable_id,
  attachmentable_type,
  id
}) => {
  return client
    .delete(
      `api/v1/${attachmentable_type}/${attachmentable_id}/attachments/${id}`
    )
    .then(response => response.data)
}
