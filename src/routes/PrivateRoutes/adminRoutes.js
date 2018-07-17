import React from "react"

import ErrorBoundary from "base_components/ErrorBoundary"
import Loadable from "base_components/Loadable"

// ------------------------- ADMIN PANEL COMPONENT -------------------------------//
const AsyncAdminGroupManager = Loadable({
  loader: () => import("scenes/Admin/GroupManager")
})

const AsyncAdminUserManager = Loadable({
  loader: () => import("scenes/Admin/UserManager")
})

// const AsyncAdminCourseCreator = Loadable({
//   loader: () => import("scenes/Admin/CourseCreator"),
//   loading: Loader,
//   timeout: 10000
// })

const AsyncAdminOrganisationSettings = Loadable({
  loader: () => import("scenes/Admin/OrganisationSettings")
})

// Course creator components
const AsyncCourses = Loadable({
  loader: () => import("scenes/Admin/Courses")
})

const AsyncAddons = Loadable({
  loader: () => import("scenes/Admin/Addons")
})

const AsyncVideos = Loadable({
  loader: () => import("scenes/Admin/Videos")
})

const adminRoutes = [
  {
    path: "/secure/admin/group-manager",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin group manager page.">
        <AsyncAdminGroupManager {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/admin/user-manager",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin user manager page.">
        <AsyncAdminUserManager {...props} />
      </ErrorBoundary>
    )
  },
  // {
  //   path: "/secure/admin/course-creator",
  //   strict: true,
  //   exact: false,
  //   AsyncComponent: props => (
  //     <ErrorBoundary errMsg="Something went wrong in displaying the admin user manager page.">
  //       <AsyncAdminCourseCreator {...props} />
  //     </ErrorBoundary>
  //   )
  // },
  {
    path: "/secure/admin/organisation-settings",
    strict: true,
    exact: false,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin user manager page.">
        <AsyncAdminOrganisationSettings {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/admin/course-creator/courses",
    strict: true,
    exact: false,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin user manager page.">
        <AsyncCourses {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/admin/course-creator/add-ons",
    strict: true,
    exact: false,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin user manager page.">
        <AsyncAddons {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/admin/course-creator/videos",
    strict: true,
    exact: false,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the admin user manager page.">
        <AsyncVideos {...props} />
      </ErrorBoundary>
    )
  }
]

export default adminRoutes
