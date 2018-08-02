import reducer, { types } from "./ducks"
import AdminGroupCoursesPage from "./AdminGroupCoursesPage"

const pages = {
  GroupCourses: AdminGroupCoursesPage
}

export { pages, reducer, types }
