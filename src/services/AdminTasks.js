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
  description,
  attachment_ids = [],
  video_ids = []
}) =>
  client
    .post(`/api/v1/courses/${course_id}/lessons/${tutorial_id}/tasks`, {
      task: {
        action_type: type,
        description,
        attachments_attributes: attachment_ids.map(attachment_id => ({
          id: attachment_id
        })),
        video_attributes: video_ids.map(video_id => ({
          id: video_id
        }))
      }
    })
    .then(response => response.data)
