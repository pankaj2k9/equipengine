import * as API from "services/API"
import { actions as coursesActions } from "./ducks"

export const fetchCourses = ({ groupId, studentId }) => {
  return async dispatch => {
    dispatch(coursesActions.fetchCoursesRequest())

    try {
      const response = await API.fetchGroupCourses({ groupId, studentId })

      return dispatch(
        coursesActions.fetchCoursesSuccess({
          courses: response.courses,
          pagination: response.meta
        })
      )
    } catch (error) {
      return dispatch(coursesActions.fetchCoursesError())
    }
  }
}
