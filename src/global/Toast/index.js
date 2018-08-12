import { toastr } from "react-redux-toastr"

export const toastAction = ({ action, errorType, success, error }) => {
  if (action.type === errorType) {
    toastr.error("Error", error)
  } else {
    toastr.success("Success", success)
  }
}
