import FeatureDisabled from "global/FeatureDisabled"
import * as AdminGroups from "scenes/AdminGroups"
import * as AdminUsers from "scenes/AdminUsers"
import * as Auth from "scenes/Auth"
import * as Course from "scenes/Course"
import * as Courses from "scenes/Courses"
import * as Landing from "scenes/Landing"
import * as MyGroups from "scenes/MyGroups"
import * as Tutorial from "scenes/Tutorial"

/**
 * Map with all the public accessible features
 * @example
 * {
 *   auth: {
 *     enabled: true,
 *     reducer,
 *     actions,
 *     types,
 *     selectors,
 *     pages: {
 *       Login: LoginPage,
 *       Signup: SignupPage
 *     }
 *   },
 *   ...
 * }
 */
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
    if (types && typeof types === "object") {
      feature.types = overrideValues(types, CALL_DISABLED_FEATURE)
    }
    if (pages && typeof pages === "object") {
      feature.pages = overrideValues(pages, FeatureDisabled)
    }
    features[name] = feature
  }
}

registerFeature({
  name: "auth",
  enabled: true,
  ...Auth
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
  name: "adminGroups",
  enabled: true,
  ...AdminGroups
})
registerFeature({
  name: "adminUsers",
  enabled: true,
  ...AdminUsers
})

export default features
