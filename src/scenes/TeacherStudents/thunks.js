import * as API from "services/API"
import { actions } from "./ducks"

export const fetchCoursesTutorials = ({ groupId, courses, studentId }) => {
  return async dispatch => {
    dispatch(actions.fetchStudentCoursesTutorialsRequest())

    try {
      const coursesTutorials = {}
      for (const course of courses) {
        const { lessons } = await API.fetchTutorials({
          groupId,
          courseId: course.id
        })
        coursesTutorials[course.id] = lessons
      }

      return dispatch(
        actions.fetchStudentCoursesTutorialsSuccess({
          coursesTutorials
        })
      )
    } catch (error) {
      return dispatch(actions.fetchStudentCoursesTutorialsError())
    }
  }
}
