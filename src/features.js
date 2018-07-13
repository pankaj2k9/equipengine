import { reducer, types, selectors, logout } from "scenes/Auth"

const features = {
  auth: {
    enabled: true,
    reducer,
    types,
    selectors,
    logout
  }
}

export default features
