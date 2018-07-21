import Loadable from "base_components/Loadable"
import reducer, { selectors } from "./ducks"
import { fetchTutorials } from "./thunks"

const actions = {
  fetchTutorials
}

const pages = {
  Tutorial: Loadable({
    loader: () => import("./TutorialPage")
  })
}

export { actions, pages, reducer, selectors }
