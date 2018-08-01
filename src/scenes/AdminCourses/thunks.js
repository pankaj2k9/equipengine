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

export const fetchGroupCourses = ({ groupId }) => {
  return async dispatch => {
    dispatch(coursesActions.fetchGroupCoursesRequest())

    try {
      const response = await API.fetchGroupCourses({ groupId })

      return dispatch(
        coursesActions.fetchGroupCoursesSuccess({
          groupCourses: response.courses,
          groupCoursesPagination: response.meta
        })
      )
    } catch (error) {
      return dispatch(coursesActions.fetchGroupCoursesError())
    }
  }
}

export const addCoursesToGroup = ({ groupId, courseIds }) => {
  return async dispatch => {
    dispatch(coursesActions.addCoursesToGroupRequest())

    try {
      for (const courseId of courseIds) {
        await API.addCourseToGroup({ groupId, courseId })
      }

      return dispatch(coursesActions.addCoursesToGroupSuccess({ courseIds }))
    } catch (error) {
      return dispatch(coursesActions.addCoursesToGroupError())
    }
  }
}
