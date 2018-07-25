import { client } from "./API"

/**
 * @returns list of courses in specific group
 */
// TODO implement pagination/inifinite loading
export const fetchGroupCourses = ({ groupId, studentId }) =>
  client
    .get(`/api/v1/groups/${groupId}/courses`, {
      params: studentId
        ? {
            student_id: studentId,
            current_count: 100
          }
        : {
            current_count: 100
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
