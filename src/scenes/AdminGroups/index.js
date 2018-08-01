// TODO move all admin stuff to admin folder cause potentially it might be a separate applicaton
import reducer from "./ducks"
import Loadable from "base_components/Loadable"

const pages = {
  Groups: Loadable({
    loader: () => import("./AdminGroupsPage")
  })
}

export { pages, reducer }
