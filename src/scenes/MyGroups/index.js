import reducer, { types, selectors } from "./ducks"
import { fetchMyGroups } from "./thunks"
import { registerFeature } from "features"

const actions = {
  fetchMyGroups
}

export default () =>
  registerFeature({
    name: "myGroups",
    enabled: true,
    actions,
    reducer,
    selectors,
    types
  })
