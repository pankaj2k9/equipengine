import React from "react"

import ErrorBoundary from "base_components/ErrorBoundary"
import features from "features"
import Loadable from "base_components/Loadable"

const AsyncAdminOrganisationSettings = Loadable({
  loader: () => import("scenes/AdminOrganisationSettings")
})

const AsyncAddons = Loadable({
  loader: () => import("scenes/AdminAddons")
})

const AsyncVideos = Loadable({
  loader: () => import("scenes/AdminVideos")
})

const adminRoutes = [
  {
    path: "/secure/admin/groups",
    strict: true,
    exact: false,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin group manager page.">
        <features.adminGroups.pages.Groups {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/admin/users",
    strict: true,
    exact: false,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin user manager page.">
        <features.adminUsers.pages.Users {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/admin/courses",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin course manager page.">
        <features.adminCourses.pages.Courses {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/admin/organisations",
    strict: true,
    exact: false,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin organization settings page.">
        <AsyncAdminOrganisationSettings {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/admin/add-ons",
    strict: true,
    exact: false,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin add-ons page.">
        <AsyncAddons {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/admin/videos",
    strict: true,
    exact: false,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin videos page.">
        <AsyncVideos {...props} />
      </ErrorBoundary>
    )
  }
]

export default adminRoutes
