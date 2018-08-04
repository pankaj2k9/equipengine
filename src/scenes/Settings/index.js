import reducer, { types } from "./ducks"
import Loadable from "base_components/Loadable"

const pages = {
  Settings: Loadable({
    loader: () => import("./SettingsPage")
  })
}

export { reducer, pages, types }
