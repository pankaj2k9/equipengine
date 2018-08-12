import * as actions from "./thunks"
import reducer, { types } from "./ducks"
import { selectors } from "./selectors"
import Loadable from "base_components/Loadable"

const pages = {
  Videos: Loadable({
    loader: () => import("./AdminVideosPage")
  })
}

export { actions, pages, reducer, types, selectors }
