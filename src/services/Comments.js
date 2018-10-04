import { client } from "./API"

/**
 *  create comment from specific discussion at course
 */
export const createComment = ({ commentable_id, commentable_type, body }) => {
  return client
    .post(`/api/v1/${commentable_type}/${commentable_id}/comments`, {
      body: body,
      subject: "",
      title: "",
      root_id: 0,
      attachment_id: 0
    })
    .then(response => response.data)
}

/**
 * @returns list of comments from specific discussion at course
 */
export const fetchComments = ({
  commentable_id,
  commentable_type,
  root_id,
  only_roots,
  current_page
}) => {
  return client
    .get(`/api/v1/${commentable_type}/${commentable_id}/comments`, {
      params: {
        root_id,
        only_roots,
        current_page
      }
    })
    .then(response => response.data)
}
