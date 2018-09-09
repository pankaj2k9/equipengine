import React from "react"

import ErrorBoundary from "base_components/ErrorBoundary"
import features from "features"
import Loadable from "base_components/Loadable"

const AsyncTeacherControls = Loadable({
  loader: () => import("scenes/TeacherControls")
})

const teacherRoutes = [
  {
    path: "/secure/groups/:groupId/teacher/groups-activity",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the groups activity page.">
        <features.teacherGroupActivities.pages.TeacherGroupActivities
          {...props}
        />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/groups/:groupId/teacher/submissions-activity",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the teacher controls page.">
        <AsyncTeacherControls {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/groups/:groupId/files",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the teacher files page.">
        <features.groupFiles.pages.GroupFiles {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/groups/:groupId/teacher/students",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the teacher user manager page.">
        <features.teacherStudents.pages.Students {...props} />
      </ErrorBoundary>
    )
  }
]

export default teacherRoutes
