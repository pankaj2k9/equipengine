import * as API from "services/API"
import { ATTACHMENTABLE_GROUP_TYPE } from "services/constants"

import { actions } from "./ducks"

export const fetchComments = ({ commentable_id, pagination }) => {
  return async dispatch => {
    dispatch(actions.fetchCommentsRequest({ pagination }))

    try {
      const { comments, ...meta } = await API.fetchComments({
        commentable_id,
        commentable_type: ATTACHMENTABLE_GROUP_TYPE,
        pagination
      })

      return dispatch(
        actions.fetchCommentsSuccess({ comments, pagination: meta })
      )
    } catch (error) {
      return dispatch(actions.fetchCommentsError())
    }
  }
}

export const createComment = ({ commentable_id, comment_body }) => {
  return async dispatch => {
    dispatch(actions.createCommentRequest())

    try {
      const { comment: newComment } = await API.createComment({
        commentable_id,
        commentable_type: ATTACHMENTABLE_GROUP_TYPE,
        comment_body
      })

      return dispatch(actions.createCommentSuccess({ comment: newComment }))
    } catch (error) {
      return dispatch(actions.createCommentError())
    }
  }
}
