import * as API from "services/API"
import { actions } from "./ducks"
import features from "features"

export const fetchCourse = ({ courseId }) => {
  return async dispatch => {
    dispatch(actions.fetchCourseRequest())

    try {
      const { course } = await API.fetchCourse({
        course_id: courseId
      })

      return dispatch(actions.fetchCourseSuccess({ course }))
    } catch (error) {
      return dispatch(actions.fetchCourseError())
    }
  }
}

export const fetchTutorials = ({ courseId }) => {
  return async dispatch => {
    dispatch(actions.fetchTutorialsRequest())

    try {
      const { lessons, meta } = await API.fetchAdminTutorials({
        course_id: courseId
      })

      return dispatch(
        actions.fetchTutorialsSuccess({
          tutorials: lessons,
          tutorialsPagination: meta
        })
      )
    } catch (error) {
      return dispatch(actions.fetchTutorialsError())
    }
  }
}

export const createTutorial = ({ courseId, title, description }) => {
  return async dispatch => {
    dispatch(actions.createTutorialRequest())

    try {
      const { lesson } = await API.createAdminTutorial({
        course_id: courseId,
        title,
        description
      })

      return dispatch(
        actions.createTutorialSuccess({
          tutorial: lesson
        })
      )
    } catch (error) {
      return dispatch(actions.createTutorialError())
    }
  }
}

export const fetchTasks = ({ courseId, tutorialId }) => {
  return async dispatch => {
    dispatch(actions.fetchTasksRequest())

    try {
      const { tasks } = await API.fetchAdminTasks({
        course_id: courseId,
        tutorial_id: tutorialId
      })

      return dispatch(
        actions.fetchTasksSuccess({
          tasks
        })
      )
    } catch (error) {
      return dispatch(actions.fetchTasksError())
    }
  }
}

export const createTask = ({ courseId, tutorialId, task }) => {
  return async dispatch => {
    dispatch(actions.createTaskRequest())

    try {
      const { task: createdTask } = await API.createAdminTask({
        course_id: courseId,
        tutorial_id: tutorialId,
        type: task.action_type,
        description: task.description
      })

      // Create new video if the link is pasted
      if (task.video_link) {
        const action = await features.adminVideos.actions.createVideo({
          videoableId: createdTask.id,
          videoLink: task.video_link,
          title: task.description
        })(dispatch)

        if (action.type === features.adminVideos.types.CREATE_VIDEO_ERROR) {
          throw new Error(action.type)
        }
        createdTask.videos = [action.payload.video]
      }

      return dispatch(
        actions.createTaskSuccess({
          task: createdTask
        })
      )
    } catch (error) {
      return dispatch(actions.createTaskError())
    }
  }
}
