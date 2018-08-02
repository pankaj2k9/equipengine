import React from "react"

import ErrorBoundary from "base_components/ErrorBoundary"
import features from "features"
import Loadable from "base_components/Loadable"

const AsyncDashboard = Loadable({
  loader: () => import("scenes/Dashboard")
})

const AsyncMessages = Loadable({
  loader: () => import("scenes/Messages")
})

const AsyncNotifications = Loadable({
  loader: () => import("scenes/Notifications")
})

const AsyncFiles = Loadable({
  loader: () => import("scenes/Files")
})

const AsyncActivity = Loadable({
  loader: () => import("scenes/Activity")
})

const AsyncHome = Loadable({
  loader: () => import("scenes/Home")
})

const AsyncSettings = Loadable({
  loader: () => import("scenes/Settings")
})

const privateRoutes = [
  {
    path: "/secure/home",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the files page.">
        <AsyncHome {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/groups/:groupId/dashboard",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the dashboard page.">
        <AsyncDashboard {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/messages",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the messages page.">
        <features.messages.pages.Messages {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/notifications",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the notifications page.">
        <AsyncNotifications {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/groups/:groupId/courses",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the courses page.">
        <features.courses.pages.Courses {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/groups/:groupId/courses/:courseId",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the course page.">
        <features.course.pages.Course {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/groups/:groupId/courses/:courseId/tutorials/:tutorialId",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the tutorial page.">
        <features.tutorials.pages.Tutorial {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/groups/:groupId/people",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the people page.">
        <features.groupUsers.pages.GroupUsers {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/groups/:groupId/files",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the files page.">
        <AsyncFiles {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/activity",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the dashboard page.">
        <AsyncActivity {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/settings",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the dashboard page.">
        <AsyncSettings {...props} />
      </ErrorBoundary>
    )
  }
]

export default privateRoutes
