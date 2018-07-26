import reducer from "./ducks"
import Loadable from "base_components/Loadable"

const pages = {
  Users: Loadable({
    loader: () => import("./AdminUsersPage")
  })
}

export { pages, reducer }
