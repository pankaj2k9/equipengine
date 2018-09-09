import * as API from "services/API"
import { actions } from "./ducks"

export const fetchGroupCourses = ({ groupId }) => {
  return async dispatch => {
    dispatch(actions.fetchGroupCoursesRequest())

    try {
      const response = await API.fetchGroupCourses({ groupId })

      return dispatch(
        actions.fetchGroupCoursesSuccess({
          groupCourses: response.courses,
          groupCoursesPagination: response.meta
        })
      )
    } catch (error) {
      return dispatch(actions.fetchGroupCoursesError())
    }
  }
}

export const addCoursesToGroup = ({ groupId, courses }) => {
  return async dispatch => {
    dispatch(actions.addCoursesToGroupRequest())

    try {
      for (const course of courses) {
        await API.addCourseToGroup({ groupId, courseId: course.id })
      }

      // TODO: Need to parallelize api calls like the commented code below though API throws 500. Need that fixed.
      // const addCourseToGroupPromises = []
      // for (const course of courses) {
      //   const promise = API.addCourseToGroup({ groupId, courseId: course.id })
      //   addCourseToGroupPromises.push(promise)
      // }

      // await Promise.all(addCourseToGroupPromises)

      return dispatch(actions.addCoursesToGroupSuccess({ courses }))
    } catch (error) {
      return dispatch(actions.addCoursesToGroupError())
    }
  }
}
