import * as API from "services/API"
import { actions } from "./ducks"
import { ATTACHMENTABLE_TASK_TYPE } from "services/constants"

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

export const fetchMoreTutorials = ({ courseId, currentPage }) => {
  return async dispatch => {
    try {
      const { lessons, meta } = await API.fetchAdminTutorials({
        course_id: courseId,
        current_page: currentPage
      })

      return dispatch(
        actions.fetchMoreTutorialsSuccess({
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

      // Create new video if the link is pasted or video is uploaded
      if (task.video_link || task.video) {
        const { video } = await API.createVideo({
          videoable_id: createdTask.id,
          video_link: task.video_link,
          file: task.video,
          title: task.video_title
        })

        createdTask.videos = [video]
      }

      if (task.attachment) {
        const { attachment } = await API.createAttachment({
          attachmentable_id: createdTask.id,
          attachmentable_type: ATTACHMENTABLE_TASK_TYPE,
          file: task.attachment
        })
        createTask.attachments = [attachment]
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

export const updateTask = ({ courseId, tutorialId, task }) => {
  return async dispatch => {
    dispatch(actions.updateTaskRequest())

    try {
      const { task: updatedTask } = await API.updateAdminTask({
        course_id: courseId,
        tutorial_id: tutorialId,
        task_id: task.id,
        type: task.action_type,
        description: task.description
      })

      // TODO move createTaskVideo as a separate async function
      // Create new video if the link is pasted or new video is uploaded
      if (task.video_link || task.video) {
        const { video } = await API.createVideo({
          videoable_id: updatedTask.id,
          video_link: task.video_link,
          file: task.video,
          title: task.video_title
        })

        if (Array.isArray(updatedTask.videos)) {
          updatedTask.videos.push(video)
        } else {
          updatedTask.videos = [video]
        }
      }

      if (task.attachment) {
        const { attachment } = await API.createAttachment({
          attachmentable_id: updatedTask.id,
          attachmentable_type: ATTACHMENTABLE_TASK_TYPE,
          file: task.attachment
        })

        if (Array.isArray(updatedTask.attachments)) {
          updatedTask.attachments.push(attachment)
        } else {
          updatedTask.attachments = [attachment]
        }
      }

      return dispatch(
        actions.updateTaskSuccess({
          task: updatedTask
        })
      )
    } catch (error) {
      return dispatch(actions.updateTaskError())
    }
  }
}

export const deleteTask = ({ courseId, tutorialId, task }) => {
  return async dispatch => {
    dispatch(actions.deleteTaskRequest())

    try {
      await API.deleteAdminTask({
        course_id: courseId,
        tutorial_id: tutorialId,
        task_id: task.id
      })

      return dispatch(
        actions.deleteTaskSuccess({
          task
        })
      )
    } catch (error) {
      return dispatch(actions.deleteTaskError())
    }
  }
}
