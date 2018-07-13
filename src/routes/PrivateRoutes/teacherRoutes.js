import React from "react"
import Loadable from "react-loadable" // for code splitting
//
import ErrorBoundary from "base_components/ErrorBoundary"
import Loader from "base_components/Loader"

//------------------------- TEACHERS PANEL COMPONENT -------------------------------//
const AsyncGroupsActivity = Loadable({
  loader: () => import("scenes/TeacherGroupsActivity"),
  loading: Loader,
  timeout: 10000
})

const AsyncTeacherControls = Loadable({
  loader: () => import("scenes/TeacherControls"),
  loading: Loader,
  timeout: 10000
})

const AsyncTeacherFiles = Loadable({
  loader: () => import("scenes/TeacherFiles"),
  loading: Loader,
  timeout: 10000
})

const AsyncTeacherUserManager = Loadable({
  loader: () => import("scenes/TeacherUserManager"),
  loading: Loader,
  timeout: 10000
})

const teacherRoutes = [
  {
    path: "/secure/teacher/groups-activity",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the groups activity page.">
        <AsyncGroupsActivity {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/teacher/submissions-activity",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the teacher controls page.">
        <AsyncTeacherControls {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/teacher/files",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the teacher files page.">
        <AsyncTeacherFiles {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/teacher/user-manager",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the teacher user manager page.">
        <AsyncTeacherUserManager {...props} />
      </ErrorBoundary>
    )
  }
]

export default teacherRoutes
