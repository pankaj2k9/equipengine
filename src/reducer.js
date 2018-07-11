import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"
import { reducer as toastr } from "react-redux-toastr"

import { reducer as activities } from "global/Activities"
import { reducer as auth } from "global/Auth"
import { reducer as myGroups } from "global/MyGroups"

// this is the root reducers, we will combine all reducers that we are using.
export default combineReducers({
  routing,
  toastr,
  activities,
  auth,
  myGroups
})
