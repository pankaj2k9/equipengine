import Loadable from "base_components/Loadable"
import reducer from "./ducks"

const AsyncSignup = Loadable({
  loader: () => import("./SignupPage")
})

const AsyncVerifyEmail = Loadable({
  loader: () => import("./VerifyEmailPage")
})

// public containers
const pages = {
  Signup: AsyncSignup,
  VerifyEmail: AsyncVerifyEmail
}

export { pages, reducer }
