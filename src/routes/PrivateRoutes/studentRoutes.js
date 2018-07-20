import React from "react"

import ErrorBoundary from "base_components/ErrorBoundary"
import features from "features"
import Loadable from "base_components/Loadable"

const AsyncDashboard = Loadable({
  loader: () => import("scenes/Dashboard")
})

const AsyncTutorial = Loadable({
  loader: () => import("scenes/Tutorial")
})

const AsyncGroups = Loadable({
  loader: () => import("scenes/Groups")
})

const AsyncMessages = Loadable({
  loader: () => import("scenes/Messages")
})

const AsyncPeople = Loadable({
  loader: () => import("scenes/People")
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
    path: "/secure/:groupId/dashboard",
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
        <AsyncMessages {...props} />
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
    path: "/secure/:groupId/courses",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the courses page.">
        <features.courses.pages.Courses {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/:groupId/courses/:courseId",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the course page.">
        <features.course.pages.Course {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/:groupId/courses/:courseId/tutorials/:id",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the tutorial page.">
        <AsyncTutorial {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/:groupId/groups",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the groups page.">
        <AsyncGroups {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/:groupId/people",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the people page.">
        <AsyncPeople {...props} />
      </ErrorBoundary>
    )
  },
  {
    path: "/secure/:groupId/files",
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
