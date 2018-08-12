import { client } from "./API"

/**
 *
 * fetch files without file content by type and id (like group type and group id)
 */
export const fetchAttachments = ({ attachmentable_id, attachmentable_type }) =>
  client
    .get(`/api/v1/${attachmentable_type}/${attachmentable_id}/attachments`)
    .then(response => response.data)
