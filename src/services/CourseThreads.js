import { client } from "./API"

/**
 * @returns list of threads from specific course for group
 */
export const fetchCourseThreads = ({ group_id, course_id }) => {
  return client
    .get(`/api/v1/groups/${group_id}/courses/${course_id}/course_threads`)
    .then(response => response.data)
}

/**
 * @returns created thread from specific course for group
 */
export const createThreadDiscussion = ({ group_id, course_id, title }) => {
  return client
    .post(`/api/v1/groups/${group_id}/courses/${course_id}/course_threads`, {
      title
    })
    .then(response => response.data)
}
