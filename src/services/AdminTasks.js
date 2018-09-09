import { client } from "./API"

/**
 * @returns list of lessons/tutorials in specific course
 */
export const fetchAdminTasks = ({ course_id, tutorial_id }) =>
  client
    .get(`/api/v1/courses/${course_id}/lessons/${tutorial_id}/tasks`, {
      params: {
        current_count: 100
      }
    })
    .then(response => response.data)

/**
 * @returns created lesson task
 */
export const createAdminTask = ({
  course_id,
  tutorial_id,
  type,
  description
}) =>
  client
    .post(`/api/v1/courses/${course_id}/lessons/${tutorial_id}/tasks`, {
      task: {
        action_type: type,
        description
      }
    })
    .then(response => response.data)

/**
 * @returns updated lesson task
 */
export const updateAdminTask = ({
  course_id,
  tutorial_id,
  task_id,
  type,
  description
}) =>
  client
    .put(
      `/api/v1/courses/${course_id}/lessons/${tutorial_id}/tasks/${task_id}`,
      {
        task: {
          action_type: type,
          description
        }
      }
    )
    .then(response => response.data)

/**
 * @returns { "success": true }
 */
export const deleteAdminTask = ({ course_id, tutorial_id, task_id }) =>
  client
    .delete(
      `/api/v1/courses/${course_id}/lessons/${tutorial_id}/tasks/${task_id}`
    )
    .then(response => response.data)
