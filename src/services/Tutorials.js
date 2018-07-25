import { client } from "./API"

/**
 * @returns list of lessons/tutorials in specific course
 */
export const fetchTutorials = ({ groupId, courseId }) =>
  client
    .get(`/api/v1/groups/${groupId}/courses/${courseId}/lessons`, {
      params: {
        current_count: 100
      }
    })
    .then(response => response.data)

/**
 * Change { lesson_user_for_current_student : { status: .. } }
 * @returns { success: true }
 */
export const updateTutorialCompleted = ({
  groupId,
  courseId,
  tutorialId,
  completed
}) =>
  client
    .put(
      `/api/v1/groups/${groupId}/courses/${courseId}/lessons/${tutorialId}/complete`,
      {
        completed
      }
    )
    .then(response => response.data)
