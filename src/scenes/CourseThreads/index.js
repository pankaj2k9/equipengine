import reducer, { selectors } from "./ducks"
import { fetchCourseThreads, fetchThreadComments } from "./thunks"
import CourseThreadsPage from "./CourseThreadsPage"

const pages = {
  CourseThreads: CourseThreadsPage
}

const actions = {
  fetchCourseThreads,
  fetchThreadComments
}

export { pages, reducer, actions, selectors }
