import FeatureDisabled from "global/FeatureDisabled"
import * as Address from "scenes/Address"
import * as AdminCourse from "scenes/AdminCourse"
import * as AdminCourses from "scenes/AdminCourses"
import * as AdminGroups from "scenes/AdminGroups"
import * as AdminGroupCourses from "scenes/AdminGroupCourses"
import * as AdminGroupUsers from "scenes/AdminGroupUsers"
import * as AdminUsers from "scenes/AdminUsers"
import * as AdminVideos from "scenes/AdminVideos"
import * as AdminOrganizationSettings from "scenes/AdminOrganisationSettings"
import * as Course from "scenes/Course"
import * as Courses from "scenes/Courses"
import * as GroupUsers from "scenes/GroupUsers"
import * as Landing from "scenes/Landing"
import * as Login from "scenes/Login"
import * as Messages from "scenes/Messages"
import * as MyGroups from "scenes/MyGroups"
import * as ResetPassword from "scenes/ResetPassword"
import * as Signup from "scenes/Signup"
import * as TeacherStudents from "scenes/TeacherStudents"
import * as TeacherGroupsActivity from "scenes/TeacherGroupsActivity"
import * as Tutorial from "scenes/Tutorial"
import * as Settings from "scenes/Settings"
import * as GroupFiles from "scenes/Files"

/**
 * Map with all the public accessible features
 * @example
 * {
 *   login: {
 *     enabled: true,
 *     reducer,
 *     actions,
 *     types,
 *     selectors,
 *     pages: {
 *       Login: LoginPage
 *     }
 *   },
 *   ...
 * }
 */
// TODO probably try https://github.com/tdeekens/flopflip
// Or https://vasanthk.gitbooks.io/react-bits/patterns/29.feature-flags-using-redux.html
const features = {}

const CALL_DISABLED_FEATURE = "equipenine/CALL_DISABLE_FEATURE"

const overrideValues = (object, newValue) => {
  const newObject = {}
  for (const key in object) {
    newObject[key] = newValue
  }
  return newObject
}

/**
 * Function for plugin creation
 */
const registerFeature = ({
  name,
  enabled,
  reducer,
  actions,
  types,
  selectors,
  pages,
  ...rest
}) => {
  if (!name) {
    throw new Error("Feature name is missing")
  }
  if (name in features) {
    throw new Error(`Feature with name ${name} already exists`)
  }

  if (enabled) {
    features[name] = {
      enabled,
      reducer,
      actions,
      types,
      selectors,
      pages,
      ...rest
    }
  } else {
    // Override feature stuff to not do everything if it is not enabled
    const feature = {
      enabled,
      // selectors always have to be public cause of failures in isPending
      selectors
    }
    if (reducer && typeof reducer === "function") {
      feature.reducer = () => ({})
    }
    if (actions && typeof actions === "object") {
      feature.actions = overrideValues(actions, () => {
        console.log(
          `Action can not be executed cause feature ${name} is disabled`
        )
        return {
          type: CALL_DISABLED_FEATURE
        }
      })
    }
    if (pages && typeof pages === "object") {
      feature.pages = overrideValues(pages, FeatureDisabled)
    }
    features[name] = feature
  }
}

registerFeature({
  name: "login",
  enabled: true,
  ...Login
})
registerFeature({
  name: "resetPassword",
  enabled: true,
  ...ResetPassword
})
registerFeature({
  name: "signup",
  enabled: false, // Disable signup cause user can not login after signup for now..
  ...Signup
})
registerFeature({
  name: "landing",
  enabled: true,
  ...Landing
})
registerFeature({
  name: "myGroups",
  enabled: true,
  ...MyGroups
})
registerFeature({
  name: "courses",
  enabled: true,
  ...Courses
})
registerFeature({
  name: "course",
  enabled: true,
  ...Course
})
registerFeature({
  name: "tutorials",
  enabled: true,
  ...Tutorial
})
registerFeature({
  name: "adminCourses",
  enabled: true,
  ...AdminCourses
})
registerFeature({
  name: "adminCourse",
  enabled: true,
  ...AdminCourse
})
registerFeature({
  name: "adminGroups",
  enabled: true,
  ...AdminGroups
})
registerFeature({
  name: "adminGroupCourses",
  enabled: true,
  ...AdminGroupCourses
})
registerFeature({
  name: "adminGroupUsers",
  enabled: true,
  ...AdminGroupUsers
})
registerFeature({
  name: "adminUsers",
  enabled: true,
  ...AdminUsers
})
registerFeature({
  name: "adminVideos",
  enabled: true,
  ...AdminVideos
})
registerFeature({
  name: "messages",
  enabled: true,
  ...Messages
})
registerFeature({
  name: "groupUsers",
  enabled: true,
  ...GroupUsers
})
registerFeature({
  name: "settings",
  enabled: true,
  ...Settings
})
registerFeature({
  name: "address",
  enabled: true,
  ...Address
})
registerFeature({
  name: "groupFiles",
  enabled: true,
  ...GroupFiles
})
registerFeature({
  name: "adminOrganizationSettings",
  enabled: true,
  ...AdminOrganizationSettings
})
registerFeature({
  name: "teacherStudents",
  enabled: true,
  ...TeacherStudents
})
registerFeature({
  name: "teacherGroupActivities",
  enabled: true,
  ...TeacherGroupsActivity
})

export default features
