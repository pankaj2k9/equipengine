import { client } from "./API"

/**
 * @returns course info
 */
export const fetchCourse = ({ course_id }) =>
  client.get(`/api/v1/courses/${course_id}`).then(response => response.data)

/**
 * @returns list of all courses
 */
export const fetchCourses = ({
  term,
  sort_field,
  sort_flag,
  current_page = 1
}) => {
  const params = {
    current_page
  }

  if (term) {
    params.term = term
  }

  if (sort_field) {
    params.sort_field = sort_field
  }

  if (sort_flag) {
    params.sort_flag = sort_flag
  }

  return client
    .get(`/api/v1/courses`, {
      params
    })
    .then(response => response.data)
}

/**
 * @returns created course
 */
export const createCourse = ({ title, description }) => {
  return client
    .post(`/api/v1/courses`, {
      title,
      description
    })
    .then(response => response.data)
}

/**
 *  @desc update course
 *  @returns updated course
 */
export const updateCourse = (id, { title, description }) => {
  return client
    .put(`/api/v1/courses/${id}`, {
      title,
      description
    })
    .then(response => response.data)
}
