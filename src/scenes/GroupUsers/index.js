import reducer, { selectors, types } from "./ducks"
import Loadable from "base_components/Loadable"
import * as actions from "./thunks"

const pages = {
  GroupUsers: Loadable({
    loader: () => import("./GroupUsersPage")
  })
}

export { actions, pages, reducer, selectors, types }
