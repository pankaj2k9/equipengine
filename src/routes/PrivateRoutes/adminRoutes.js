import React from "react"
import Loadable from "react-loadable" // for code splitting
//
import ErrorBoundary from "base_components/ErrorBoundary"
import Loader from "base_components/Loader"

// ------------------------- ADMIN PANEL COMPONENT -------------------------------//
const AsyncAdminGroupManager = Loadable({
  loader: () => import("scenes/Admin/GroupManager"),
  loading: Loader,
  timeout: 10000
})

const AsyncAdminUserManager = Loadable({
  loader: () => import("scenes/Admin/UserManager"),
  loading: Loader,
  timeout: 10000
})

// const AsyncAdminCourseCreator = Loadable({
//   loader: () => import("scenes/Admin/CourseCreator"),
//   loading: Loader,
//   timeout: 10000
// })

const AsyncAdminOrganisationSettings = Loadable({
  loader: () => import("scenes/Admin/OrganisationSettings"),
  loading: Loader,
  timeout: 10000
})

// Course creator components
const AsyncCourses = Loadable({
  loader: () => import("scenes/Admin/Courses"),
  loading: Loader,
  timeout: 10000
})

const AsyncAddons = Loadable({
  loader: () => import("scenes/Admin/Addons"),
  loading: Loader,
  timeout: 10000
})

const AsyncVideos = Loadable({
  loader: () => import("scenes/Admin/Videos"),
  loading: Loader,
  timeout: 10000
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
