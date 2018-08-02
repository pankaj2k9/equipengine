import reducer, { types, selectors } from "./ducks"
import * as actions from "./thunks"
import Loadable from "base_components/Loadable"

const pages = {
  Courses: Loadable({
    loader: () => import("./AdminCoursesPage")
  })
}

export { actions, pages, reducer, types, selectors }
