import reducer from "./ducks"
import Loadable from "base_components/Loadable"

const pages = {
  Messages: Loadable({
    loader: () => import("./MessagesPage")
  })
}

export { reducer, pages }
