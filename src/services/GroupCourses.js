import { client } from "./API"
import { TEACHER_ROLE, ACTIVE_COURSE_IN_GROUP_STATUS } from "./constants"

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

/**
 * @returns add course to group
 */
export const addCourseToGroup = ({
  groupId,
  courseId,
  status = ACTIVE_COURSE_IN_GROUP_STATUS,
  completeLessonCan = TEACHER_ROLE,
  discussingEnabled = true,
  filesEnabled = true,
  reportsEnabled = true,
  studentContentEnabled = true
}) =>
  client
    .post(`/api/v1/groups/${groupId}/course_groups`, {
      complete_lesson_can: completeLessonCan,
      discussing_enabled: discussingEnabled,
      files_enabled: filesEnabled,
      reports_enabled: reportsEnabled,
      status,
      student_content_enabled: studentContentEnabled,
      course_id: courseId
    })
    .then(response => response.data)
