// TODO move all admin stuff to admin folder cause potentially it might be a separate applicaton
import Loadable from "base_components/Loadable"

import reducer from "./ducks"
import * as actions from "./thunks"

const pages = {
  Groups: Loadable({
    loader: () => import("./AdminGroupsPage")
  })
}

export { actions, pages, reducer }
