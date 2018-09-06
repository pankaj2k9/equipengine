import Loadable from "base_components/Loadable"

import reducer from "./ducks"

const pages = {
  TeacherGroupActivities: Loadable({
    loader: () => import("./TeacherGroupsActivityPage")
  })
}

export { pages, reducer }
