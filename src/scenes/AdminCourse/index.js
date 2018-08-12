import reducer, { types } from "./ducks"
import Loadable from "base_components/Loadable"

const pages = {
  Course: Loadable({
    loader: () => import("./AdminCoursePage")
  })
}

export { pages, reducer, types }
