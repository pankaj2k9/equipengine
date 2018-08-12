import reducer, { types } from "./ducks"
import * as actions from "./thunks"
import { selectors } from "./selectors"
import InputAddress from "./InputAddress"

const pages = {
  AddressInfo: InputAddress
}

export { actions, reducer, selectors, types, pages }
