import React, { Fragment } from "react"
import PropTypes from "prop-types"
import connectedAuthWrapper from "redux-auth-wrapper/connectedAuthWrapper"
import Loadable from "react-loadable"
import { Switch, Route } from "react-router-dom"

import AsyncNotFound from "../AynscNotFound"
import createRoute from "../createRoute"
import features from "features"
import Main from "base_components/Main"
import studentRoutes from "./studentRoutes"
import teacherRoutes from "./teacherRoutes"
import adminRoutes from "./adminRoutes"
import { ADMIN_ROLE, TEACHER_ROLE } from "services/constants"

/* create our async component in here
 * this will optimize the loading of components of our app
 * dynamically importing our scenes here */
const AsyncMainBars = Loadable({
  loader: () => import("global/MainBars"),
  loading: () => null, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
})

const teacherOrAdmin = connectedAuthWrapper({
  authenticatedSelector: features.login.selectors.selectIsInAnyRole([
    ADMIN_ROLE,
    TEACHER_ROLE
  ]),
  FailureComponent: AsyncNotFound
})

const adminOnly = connectedAuthWrapper({
  authenticatedSelector: features.login.selectors.selectIsAdmin(),
  FailureComponent: AsyncNotFound
})

const PrivateRoutes = ({ location }) => (
  <Fragment>
    {/* Displaying the Navbar and Sidebar */}
    {/* TODO Replace AsyncNavBar and Main with parameters in createRoute functions as options like { sidebar: false, navbar: true })  */}
    <Route path="/secure" render={props => <AsyncMainBars {...props} />} />
    {/* Minor optional padding for sidebar*/}
    <Main pathname={location.pathname}>
      {/* Routes that app uses */}
      <Switch>
        {studentRoutes.map(route => createRoute(route))}
        {teacherRoutes.map(route => createRoute(route, teacherOrAdmin))}
        {adminRoutes.map(route => createRoute(route, adminOnly))}
        <Route component={AsyncNotFound} />
      </Switch>
    </Main>
  </Fragment>
)

PrivateRoutes.propTypes = {
  location: PropTypes.object.isRequired
}

export default PrivateRoutes
