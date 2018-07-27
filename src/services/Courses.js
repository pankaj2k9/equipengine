import { client } from "./API"

/**
 * @returns list of courses in specific group
 */
export const fetchGroupCourses = ({ groupId, studentId }) => {
  const params = {
    // TODO implement pagination/inifinite loading
    current_count: 100
  }

  if (studentId) {
    params.student_id = studentId
  }

  return client
    .get(`/api/v1/groups/${groupId}/courses`, {
      params
    })
    .then(response => response.data)
}

/**
 * @returns course object with current course information
 */
export const fetchGroupCourse = ({ groupId, courseId }) =>
  client
    .get(`/api/v1/groups/${groupId}/course/${courseId}`)
    .then(response => response.data)
