import Loadable from "base_components/Loadable"
import reducer, { types, selectors } from "./ducks"
import { logout } from "./thunks"

const AsyncLogin = Loadable({
  loader: () => import("./LoginPage")
})

// Public views
const pages = {
  Login: AsyncLogin
}

// Public methods
const actions = {
  logout
}

export { actions, pages, reducer, selectors, types }
