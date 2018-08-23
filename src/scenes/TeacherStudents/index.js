import reducer, { types } from "./ducks"
import { selectors } from "./selectors"
import Loadable from "base_components/Loadable"

const pages = {
  Students: Loadable({
    loader: () => import("./TeacherStudentsPage")
  })
}

export { pages, reducer, selectors, types }
