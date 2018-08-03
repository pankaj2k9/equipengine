import reducer, { selectors, types } from "./ducks"
import * as actions from "./thunks"
import Loadable from "base_components/Loadable"

const pages = {
  Users: Loadable({
    loader: () => import("./AdminUsersPage")
  })
}

export { actions, pages, reducer, selectors, types }
