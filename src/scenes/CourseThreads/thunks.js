import * as API from "services/API"
import { actions as courseThreadsActions } from "./ducks"
import { COMMENT_COURSE_THREAD } from "constants"

export const fetchCourseThreads = ({ groupId, courseId, current_page }) => {
  return async dispatch => {
    dispatch(courseThreadsActions.fetchCourseThreadsRequest({}))
    try {
      const { course_threads, meta } = await API.fetchCourseThreads({
        group_id: groupId,
        course_id: courseId,
        current_page
      })

      return dispatch(
        courseThreadsActions.fetchCourseThreadsSuccess({
          threads: course_threads,
          pagination: meta
        })
      )
    } catch (error) {
      return dispatch(courseThreadsActions.fetchCourseThreadsError())
    }
  }
}

export const fetchThreadComments = ({
  threads_id,
  current_page,
  root_id,
  only_roots
}) => {
  return async dispatch => {
    dispatch(courseThreadsActions.fetchThreadCommentsRequest())
    try {
      const { comments, meta } = await API.fetchComments({
        commentable_id: threads_id,
        commentable_type: COMMENT_COURSE_THREAD,
        root_id,
        only_roots,
        current_page
      })

      return dispatch(
        courseThreadsActions.fetchThreadCommentsSuccess({
          comments,
          pagination: meta
        })
      )
    } catch (error) {
      return dispatch(courseThreadsActions.fetchThreadCommentsError())
    }
  }
}

export const createThreadDiscussion = ({ groupId, courseId, title }) => {
  return async dispatch => {
    dispatch(courseThreadsActions.createThreadRequest())
    try {
      const { course_thread } = await API.createThreadDiscussion({
        group_id: groupId,
        course_id: courseId,
        title
      })
      return dispatch(
        courseThreadsActions.createThreadSuccess({
          courseThread: course_thread
        })
      )
    } catch (error) {
      return dispatch(courseThreadsActions.createThreadError())
    }
  }
}
