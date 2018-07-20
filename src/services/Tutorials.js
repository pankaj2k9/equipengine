import { client } from "./API"

/**
 * @returns list of lessons/tutorials in specific course
 */
export const fetchTutorials = ({ groupId, courseId }) =>
  client
    .get(`/api/v1/groups/${groupId}/courses/${courseId}/lessons`)
    .then(response => response.data)
