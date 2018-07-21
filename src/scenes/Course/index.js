import Loadable from "base_components/Loadable"

const pages = {
  Course: Loadable({
    loader: () => import("./CoursePage")
  })
}

export { pages }
