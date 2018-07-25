import Loadable from "base_components/Loadable"
import reducer, { types, selectors } from "./ducks"
import * as thunks from "./thunks"

const AsyncLogin = Loadable({
  loader: () => import("./LoginPage")
})

const AsyncSignup = Loadable({
  loader: () => import("./SignupPage")
})

const AsyncVerifyEmail = Loadable({
  loader: () => import("./VerifyEmailPage")
})

// public containers
const pages = {
  Login: AsyncLogin,
  Signup: AsyncSignup,
  VerifyEmail: AsyncVerifyEmail
}

// Public methods
const actions = {
  logout: thunks.logout
}

export { actions, pages, reducer, selectors, types }