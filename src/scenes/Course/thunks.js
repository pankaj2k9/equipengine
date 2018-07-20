import * as API from "services/API"
import { actions as courseActions } from "./ducks"

export const fetchTutorials = ({ groupId, courseId }) => {
  return async dispatch => {
    dispatch(courseActions.fetchTutorialsRequest())

    try {
      const response = await API.fetchTutorials({ groupId, courseId })

      return dispatch(
        courseActions.fetchTutorialsSuccess({
          tutorials: response.lessons,
          pagination: response.meta
        })
      )
    } catch (error) {
      return dispatch(courseActions.fetchTutorialsError())
    }
  }
}
