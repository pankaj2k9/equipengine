import reducer from "./ducks"
import Loadable from "base_components/Loadable"

const pages = {
  GroupUsers: Loadable({
    loader: () => import("./GroupUsersPage")
  })
}

export { pages, reducer }
