import { client } from "./API"
import { TEACHER_ROLE, ACTIVE_COURSE_IN_GROUP_STATUS } from "./constants"

/**
 * @returns list of courses in specific group
 */
export const fetchGroupCourses = ({ groupId, studentId, current_page }) => {
  const params = {
    current_page
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
 * @returns fetch course for group
 */
export const fetchCourseSettingsForGroup = async ({
  groupId,
  organization_id = 1,
  current_page,
  current_count
}) => {
  const params = {}

  if (organization_id) {
    params.organization_id = organization_id
  }

  if (current_page) {
    params.current_page = current_page
  }

  if (current_count) {
    params.current_count = current_count
  }

  return client
    .get(`/api/v1/groups/${groupId}/course_groups`, { params })
    .then(response => response.data)
}

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

/**
 * @returns updated course for group
 */
export const updateGroupCourseSettings = ({
  id,
  groupId,
  status = ACTIVE_COURSE_IN_GROUP_STATUS,
  complete_lesson_can = TEACHER_ROLE,
  discussing_enabled = true,
  files_enabled = true,
  precourse_id,
  student_content_enabled = true,
  sequence_number = 0
}) =>
  client
    .put(`/api/v1/groups/${groupId}/course_groups/${id}`, {
      complete_lesson_can,
      discussing_enabled,
      files_enabled,
      status,
      student_content_enabled,
      precourse_id,
      sequence_number
    })
    .then(response => response.data)

/**
 * @returns deleted groupCourseSettings
 */
export const deleteGroupCourseSettings = ({ groupId, id }) =>
  client
    .delete(`/api/v1/groups/${groupId}/course_groups/${id}`)
    .then(response => response.data)
