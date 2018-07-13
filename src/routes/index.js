import React, { Fragment } from "react"
import { connectedRouterRedirect } from "redux-auth-wrapper/history4/redirect"
import locationHelperBuilder from "redux-auth-wrapper/history4/locationHelper"
/* for code splitting - loadable */
import Loadable from "react-loadable"
import { Switch, Route } from "react-router-dom"
//
import AynscNotFound from "./AynscNotFound"
import Loader from "base_components/Loader"
import PrivateRoutes from "./PrivateRoutes"
import features from "features"

//
// Adds auth redirecting
// See reacr-auth-wrapper tutorial
// https://mjrussell.github.io/redux-auth-wrapper/docs/Getting-Started/ReactRouter4.html
//
const userIsAuthenticated = connectedRouterRedirect({
  // The url to redirect user to if they fail
  redirectPath: "/login",
  // If selector is true, wrapper will not redirect
  // For example let's check that state contains user data
  authenticatedSelector: features.auth.selectors.selectIsLoggedIn()
})

// For ?redirect=... parsing
const locationHelper = locationHelperBuilder({})

const userIsNotAuthenticated = connectedRouterRedirect({
  // This sends the user either to the query param route if we have one
  // or to the landing page if none is specified and the user is already logged in
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || "/secure/home",
  // This prevents us from adding the query parameter when we send the user away from the login page
  allowRedirectBack: false,
  // If selector is true, wrapper will not redirect
  // So if there is no user data, then we show the page
  authenticatedSelector: features.auth.selectors.selectIsNotLoggedIn()
})

const AsyncLandingPage = Loadable({
  loader: () => import("scenes/LandingPage"),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
})

// TODO move to index.js LoginPage, so it will be possible just to use features.auth.pages.LoginPage
const AsyncLogin = Loadable({
  loader: () => import("scenes/Auth/LoginPage"),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
})

const AsyncSignup = Loadable({
  loader: () => import("scenes/Auth/SignupPage"),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
})

const AsyncVerifyEmail = Loadable({
  loader: () => import("scenes/Auth/VerifyEmailPage"),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
})

const Routes = () => (
  <Fragment>
    <Switch>
      <Route exact strict path="/" component={AsyncLandingPage} />
      <Route
        exact
        strict
        path="/login"
        // Redirect to secure home page if user is already logged in
        component={userIsNotAuthenticated(AsyncLogin)}
      />
      <Route
        exact
        strict
        path="/signup"
        // Redirect to secure home page if user is already logged in
        component={userIsNotAuthenticated(AsyncSignup)}
      />
      <Route
        exact
        strict
        path="/verify-email"
        // Redirect to secure home page if user is already logged in
        component={userIsNotAuthenticated(AsyncVerifyEmail)}
      />
      <Route
        path="/secure"
        // Redirect to login page if user is not logged in
        component={userIsAuthenticated(PrivateRoutes)}
      />
      <Route component={AynscNotFound} />
    </Switch>
  </Fragment>
)

Routes.propTypes = {}

export default Routes
