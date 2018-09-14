import { combineReducers } from "redux"
import { routerReducer as routing } from "react-router-redux"
import { reducer as toastr } from "react-redux-toastr"

import features from "features"
import { reducer as activities } from "global/Activities"

// this is the root reducers, we will combine all reducers that we are using.
export default combineReducers({
  activities,
  address: features.address.reducer,
  adminCourse: features.adminCourse.reducer,
  adminCourses: features.adminCourses.reducer,
  adminGroupCourses: features.adminGroupCourses.reducer,
  adminGroups: features.adminGroups.reducer,
  adminGroupUsers: features.adminGroupUsers.reducer,
  adminOrganizationSettings: features.adminOrganizationSettings.reducer,
  adminUsers: features.adminUsers.reducer,
  adminVideos: features.adminVideos.reducer,
  chats: features.messages.reducer,
  courses: features.courses.reducer,
  courseThreads: features.courseThreads.reducer,
  dashboard: features.dashboard.reducer,
  groupFiles: features.groupFiles.reducer,
  groupUsers: features.groupUsers.reducer,
  login: features.login.reducer,
  myGroups: features.myGroups.reducer,
  resetPassword: features.resetPassword.reducer,
  routing,
  settings: features.settings.reducer,
  signup: features.signup.reducer,
  teacherGroupActivities: features.teacherGroupActivities.reducer,
  teacherStudents: features.teacherStudents.reducer,
  toastr,
  tutorials: features.tutorials.reducer
})
