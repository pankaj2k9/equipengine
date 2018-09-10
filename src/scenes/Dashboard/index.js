import Loadable from "base_components/Loadable"

import reducer from "./ducks"

const pages = {
  Dashboard: Loadable({
    loader: () => import("./DashboardPage")
  })
}

export { pages, reducer }
