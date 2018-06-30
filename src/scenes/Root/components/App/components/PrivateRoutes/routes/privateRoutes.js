import React from "react"
//
import ErrorBoundary from "base_components/ErrorBoundary"
/* for code splitting - loadable */
import Loadable from "react-loadable"
import Loader from "base_components/Loader"

const AsyncBrowseGroups = Loadable({
  loader: () => import("scenes/BrowseGroups"),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
})

const AsyncDashboard = Loadable({
  loader: () => import("scenes/Dashboard"),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
})

const AsyncCourses = Loadable({
  loader: () => import("scenes/Courses"),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
})

const AsyncGroups = Loadable({
  loader: () => import("scenes/Groups"),
  loading: Loader,
  timeout: 10000
})

const AsyncMessages = Loadable({
  loader: () => import("scenes/Messages"),
  loading: Loader,
  timeout: 10000
})

const AsyncPeople = Loadable({
  loader: () => import("scenes/People"),
  loading: Loader,
  timeout: 10000
})

const AsyncNotifications = Loadable({
  loader: () => import("scenes/Notifications"),
  loading: Loader,
  timeout: 10000
})

const AsyncFiles = Loadable({
  loader: () => import("scenes/Files"),
  loading: Loader,
  timeout: 10000
})

const AsyncActivity = Loadable({
  loader: () => import("scenes/Activity"),
  loading: Loader,
  timeout: 10000
})

const AsyncHome = Loadable({
  loader: () => import("scenes/Home"),
  loading: Loader,
  timeout: 10000
})

const AsyncSettings = Loadable({
  loader: () => import("scenes/Settings"),
  loading: Loader,
  timeout: 10000
})

const privateRoutes = [
  {
    id: "private00",
    path: "/secure/browse-groups",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the dashboard page.">
        <AsyncBrowseGroups {...props} />
      </ErrorBoundary>
    )
  },
  {
    id: "private01",
    path: "/secure/dashboard",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the dashboard page.">
        <AsyncDashboard {...props} />
      </ErrorBoundary>
    )
  },
  {
    id: "private02",
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
    id: "private03",
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
    id: "private04",
    path: "/secure/courses",
    strict: true,
    exact: false,
    AsyncRenderComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the courses page.">
        <AsyncCourses {...props} />
      </ErrorBoundary>
    )
  },
  {
    id: "private05",
    path: "/secure/groups",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the groups page.">
        <AsyncGroups {...props} />
      </ErrorBoundary>
    )
  },
  {
    id: "private06",
    path: "/secure/people",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the people page.">
        <AsyncPeople {...props} />
      </ErrorBoundary>
    )
  },
  {
    id: "private07",
    path: "/secure/files",
    strict: true,
    exact: true,
    AsyncComponent: props => (
      <ErrorBoundary errMsg="Something went wrong in displaying the files page.">
        <AsyncFiles {...props} />
      </ErrorBoundary>
    )
  },
  {
    id: "private08",
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
    id: "private09",
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
    id: "private10",
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
