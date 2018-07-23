import * as API from "services/API"
import { actions } from "./ducks"

export const fetchTutorials = ({ groupId, courseId }) => {
  return async dispatch => {
    dispatch(actions.fetchTutorialsRequest())

    try {
      const response = await API.fetchTutorials({ groupId, courseId })

      return dispatch(
        actions.fetchTutorialsSuccess({
          tutorials: response.lessons,
          pagination: response.meta
        })
      )
    } catch (error) {
      return dispatch(actions.fetchTutorialsError())
    }
  }
}

export const updateTutorialCompleted = ({
  groupId,
  courseId,
  tutorialId,
  completed
}) => {
  return async dispatch => {
    dispatch(actions.updateTutorialCompletedRequest())

    try {
      await API.updateTutorialCompleted({
        groupId,
        courseId,
        tutorialId,
        completed
      })

      return dispatch(
        actions.updateTutorialCompletedSuccess({
          tutorialId,
          completed
        })
      )
    } catch (error) {
      return dispatch(actions.updateTutorialCompletedError())
    }
  }
}

export const fetchTasks = ({ groupId, courseId, tutorialId }) => {
  return async dispatch => {
    dispatch(actions.fetchTasksRequest())

    try {
      const response = await API.fetchTasks({ groupId, courseId, tutorialId })

      return dispatch(
        actions.fetchTasksSuccess({
          tasks: response.tasks
        })
      )
    } catch (error) {
      return dispatch(actions.fetchTasksError())
    }
  }
}
