import { client } from "./API"
import { ACTIVE_TUTORIAL_STATUS } from "./constants"

/**
 * @returns list of lessons/tutorials in specific course
 */
export const fetchAdminTutorials = ({ course_id, current_page = 1 }) =>
  client
    .get(`/api/v1/courses/${course_id}/lessons`, {
      params: {
        current_page
      }
    })
    .then(response => response.data)

/**
 * @returns created tutorial
 */
export const createAdminTutorial = ({
  course_id,
  title,
  description,
  status = ACTIVE_TUTORIAL_STATUS
}) =>
  client
    .post(`/api/v1/courses/${course_id}/lessons`, {
      title,
      description,
      status
    })
    .then(response => response.data)

/**
 * @returns updated tutorial
 */
export const updateAdminTutorial = ({
  course_id,
  tutorial_id,
  title,
  description,
  status
}) =>
  client
    .put(`/api/v1/courses/${course_id}/lessons/${tutorial_id}`, {
      lesson: {
        title,
        description,
        status
      }
    })
    .then(response => response.data)

/**
 * @returns ture if success
 */
export const deleteTutorial = ({ course_id, tutorial_id }) =>
  client
    .delete(`/api/v1/courses/${course_id}/lessons/${tutorial_id}`)
    .then(response => response.data)
