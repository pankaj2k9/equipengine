import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"
import { reducer as toastr } from "react-redux-toastr"

import features from "features"
import { reducer as activities } from "global/Activities"

// this is the root reducers, we will combine all reducers that we are using.
export default combineReducers({
  activities,
  adminCourses: features.adminCourses.reducer,
  adminGroups: features.adminGroups.reducer,
  adminGroupCourses: features.adminGroupCourses.reducer,
  adminGroupUsers: features.adminGroupUsers.reducer,
  adminUsers: features.adminUsers.reducer,
  chats: features.messages.reducer,
  courses: features.courses.reducer,
  login: features.login.reducer,
  myGroups: features.myGroups.reducer,
  groupUsers: features.groupUsers.reducer,
  routing,
  signup: features.signup.reducer,
  toastr,
  tutorials: features.tutorials.reducer
})
