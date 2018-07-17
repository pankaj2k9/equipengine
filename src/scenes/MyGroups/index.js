import reducer, { types, selectors } from "./ducks"
import { fetchMyGroups } from "./thunks"

const actions = {
  fetchMyGroups
}

export { actions, reducer, selectors, types }
