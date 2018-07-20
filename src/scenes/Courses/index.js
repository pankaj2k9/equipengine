import reducer, { selectors } from "./ducks"
import { fetchCourses } from "./thunks"
import Loadable from "base_components/Loadable"

const pages = {
  Courses: Loadable({
    loader: () => import("./CoursesPage")
  })
}

const actions = {
  fetchCourses
}

export { actions, reducer, selectors, pages }
