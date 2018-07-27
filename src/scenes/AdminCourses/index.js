import reducer from "./ducks"
import Loadable from "base_components/Loadable"

const pages = {
  Courses: Loadable({
    loader: () => import("./AdminCoursesPage")
  })
}

export { pages, reducer }
