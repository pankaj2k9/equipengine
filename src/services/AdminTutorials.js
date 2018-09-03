import { client } from "./API"
import { ACTIVE_TUTORIAL_STATUS } from "./constants"

/**
 * @returns list of lessons/tutorials in specific course
 */
export const fetchAdminTutorials = ({ course_id }) =>
  client
    .get(`/api/v1/courses/${course_id}/lessons`, {
      params: {
        current_count: 100
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