import reducer from "./ducks"
import Loadable from "base_components/Loadable"

const pages = {
  GroupFiles: Loadable({
    loader: () => import("./FilesPage")
  })
}

export { pages, reducer }
