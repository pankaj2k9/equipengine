import * as API from "services/API"
import { COMMENT_GROUP } from "services/constants"

import { actions } from "./ducks"

export const fetchComments = ({ commentable_id, pagination }) => {
  return async dispatch => {
    dispatch(actions.fetchCommentsRequest({ pagination }))

    try {
      const { comments, ...meta } = await API.fetchComments({
        commentable_id,
        commentable_type: COMMENT_GROUP,
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
        commentable_type: COMMENT_GROUP,
        comment_body
      })

      return dispatch(actions.createCommentSuccess({ comment: newComment }))
    } catch (error) {
      return dispatch(actions.createCommentError())
    }
  }
}
