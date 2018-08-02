import * as API from "services/API"
import { actions as coursesActions } from "./ducks"

export const fetchCourses = ({ term }) => {
  return async dispatch => {
    dispatch(coursesActions.fetchCoursesRequest({ term }))

    try {
      const { courses, meta } = await API.fetchCourses({ term })

      return dispatch(
        coursesActions.fetchCoursesSuccess({
          courses,
          pagination: meta
        })
      )
    } catch (error) {
      return dispatch(coursesActions.fetchCoursesError())
    }
  }
}

export const createCourse = ({ title, description }) => {
  return async dispatch => {
    dispatch(coursesActions.createCourseRequest())

    try {
      const { course } = await API.createCourse({
        title,
        description
      })

      return dispatch(
        coursesActions.createCourseSuccess({
          course
        })
      )
    } catch (error) {
      return dispatch(coursesActions.createCourseError())
    }
  }
}
