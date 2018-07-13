import reducer, { types, selectors } from "./ducks"
import * as thunks from "./thunks"

// Public methods
const logout = thunks.logout

export { reducer, types, selectors, logout }
