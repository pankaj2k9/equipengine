import reducer, { types } from "./ducks"
import AdminGroupUsersPage from "./AdminGroupUsersPage"

const pages = {
  GroupUsers: AdminGroupUsersPage
}

export { pages, reducer, types }
