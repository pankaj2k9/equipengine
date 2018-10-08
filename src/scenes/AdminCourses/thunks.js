import * as API from "services/API"
import { actions as coursesActions } from "./ducks"

export const fetchCourses = ({ term, current_page }) => {
  return async dispatch => {
    dispatch(coursesActions.fetchCoursesRequest({ term }))

    try {
      const { courses, meta } = await API.fetchCourses({ term, current_page })

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

export const fetchMoreCourses = ({ term, current_page }) => {
  return async dispatch => {
    dispatch(coursesActions.fetchMoreCoursesRequest({ term }))

    try {
      const { courses, meta } = await API.fetchCourses({ term, current_page })

      return dispatch(
        coursesActions.fetchMoreCoursesSuccess({
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

export const updateCourse = (id, { title, description }) => {
  return async dispatch => {
    dispatch(coursesActions.updateCourseRequest())

    try {
      const { course } = await API.updateCourse(id, {
        title,
        description
      })

      return dispatch(
        coursesActions.updateCourseSuccess({
          course
        })
      )
    } catch (error) {
      return dispatch(coursesActions.updateCourseError())
    }
  }
}
