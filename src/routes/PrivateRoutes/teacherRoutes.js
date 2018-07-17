import React from "react"

import ErrorBoundary from "base_components/ErrorBoundary"
import Loadable from "base_components/Loadable"

//------------------------- TEACHERS PANEL COMPONENT -------------------------------//
const AsyncGroupsActivity = Loadable({
  loader: () => import("scenes/TeacherGroupsActivity")
})

const AsyncTeacherControls = Loadable({
  loader: () => import("scenes/TeacherControls")
})

const AsyncTeacherFiles = Loadable({
  loader: () => import("scenes/TeacherFiles")
})

const AsyncTeacherUserManager = Loadable({
  loader: () => import("scenes/TeacherUserManager")
})

const teacherRoutes = [
  {
    path: "/secure/:groupId/teacher/groups-activity",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the groups activity page.">
        <AsyncGroupsActivity {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/:groupId/teacher/submissions-activity",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the teacher controls page.">
        <AsyncTeacherControls {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/:groupId/teacher/files",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the teacher files page.">
        <AsyncTeacherFiles {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/:groupId/teacher/user-manager",
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
