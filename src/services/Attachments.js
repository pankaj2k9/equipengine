import { client } from "./API"

/**
 * Fetch files without file content by type and id (like group type and group id)
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
        term: term || undefined
      }
    })
    .then(response => response.data)
}

/**
 * Create attachment with file
 */
export const createAttachment = ({
  attachmentable_id,
  attachmentable_type,
  file,
  title
}) => {
  const formData = new FormData()
  formData.append("attachment[title]", title || (file && file.name))

  if (file) {
    formData.append("attachment[data]", file, file.name)
  }

  return client
    .post(
      `/api/v1/${attachmentable_type}/${attachmentable_id}/attachments`,
      formData
    )
    .then(response => response.data)
}

/**
 * Delete attachment by id
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
