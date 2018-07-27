import { client } from "./API"

/**
 * @returns list of all courses
 */
export const fetchCourses = ({ term, sort_field, sort_flag }) => {
  const params = {
    // TODO implement pagination/inifinite loading
    current_count: 100
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
