import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"
import { reducer as toastr } from "react-redux-toastr"

// get reducer
import { reducer as auth } from "global/Auth"

// this is the root reducers, we will combine all reducers that we are using.
export default combineReducers({
  routing,
  toastr,
  auth
})
