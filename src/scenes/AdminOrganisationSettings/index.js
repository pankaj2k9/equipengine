import reducer, { types } from "./ducks"
import Loadable from "base_components/Loadable"

const pages = {
  AdminOrganizationSettings: Loadable({
    loader: () => import("./AdminOrganizationPage")
  })
}

export { pages, reducer, types }
