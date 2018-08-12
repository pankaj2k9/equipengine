import reducer, { types } from "./ducks"
import * as actions from "./thunks"
import { selectors } from "./selectors"
import InputAddress from "./InputAddress"

const pages = {
  AddressInfo: InputAddress
}

// Feature is not used yet, but usage is comming
// TODO add country autoselect component here
export { actions, reducer, selectors, types, pages }
