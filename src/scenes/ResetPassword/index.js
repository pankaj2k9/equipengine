import Loadable from "base_components/Loadable"
import reducer from "./ducks"

const AsyncResetPassword = Loadable({
  loader: () => import("./ResetPasswordPage")
})

// public containers
const pages = {
  ResetPassword: AsyncResetPassword
}

export { pages, reducer }
