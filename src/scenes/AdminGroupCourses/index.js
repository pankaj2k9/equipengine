import reducer, { types } from "./ducks"
import * as actions from "./thunks"
import AdminGroupCoursesPage from "./AdminGroupCoursesPage"

const pages = {
  GroupCourses: AdminGroupCoursesPage
}

export { pages, reducer, actions, types }
