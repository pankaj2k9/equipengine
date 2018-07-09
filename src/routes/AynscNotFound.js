import Loadable from "react-loadable"
import Loader from "base_components/Loader"

const AsyncNotFound = Loadable({
  loader: () => import("scenes/NotFound"),
  loading: Loader,
  timeout: 10000
})

export default AsyncNotFound
