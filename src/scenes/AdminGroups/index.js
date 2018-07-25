import reducer from "./ducks"
import Loadable from "base_components/Loadable"

const pages = {
  Groups: Loadable({
    loader: () => import("./AdminGroupsPage")
  })
}

export { pages, reducer }
