import { client } from "./API"

export const TASK_TYPE_QUESTION = "question"
export const TASK_TYPE_QUIZ = "quiz"
export const TASK_TYPE_READING = "reading"

/**
 * @returns list of tutorial tasks
 */
export const fetchTasks = ({ groupId, courseId, tutorialId }) =>
  client
    .get(
      `/api/v1/groups/${groupId}/courses/${courseId}/lessons/${tutorialId}/tasks`,
      {
        params: {
          current_count: 100
        }
      }
    )
    .then(response => response.data)
