import Loadable from "base_components/Loadable"

const pages = {
  Landing: Loadable({
    loader: () => import("./LandingPage")
  })
}

export { pages }
