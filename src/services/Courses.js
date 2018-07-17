import { client } from "./API"

/**
 * @returns list of courses in specific group
 */
export const fetchGroupCourses = ({ groupId, studentId }) =>
  client
    .get(`/api/v1/groups/${groupId}/courses`, {
      params: {
        student_id: studentId
      }
    })
    .then(response => response.data)

/**
 * @returns course object with current course information
 */
export const fetchCourse = ({ groupId, courseId }) =>
  client
    .get(`/api/v1/groups/${groupId}/course/${courseId}`)
    .then(response => response.data)
