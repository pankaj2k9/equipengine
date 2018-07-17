import React from "react"
import { Route, Switch } from "react-router-dom"
// for our breadcrumbs
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
// component
import ErrorBoundary from "base_components/ErrorBoundary"
import FilterableTableCourses from "./components/FilterableTableCourses"
import ContainerAdminCourse from "../components/ContainerAdminCourse"
// Scenes
import Loadable from "base_components/Loadable"

const AsyncCourse = Loadable({
  loader: () => import("./scenes/Course")
})

const Courses = ({ match }) => {
  return (
    <ContainerAdminCourse>
      {/* <Breadcrumbs /> */}
      <BreadcrumbsItem to={match.url}>Courses</BreadcrumbsItem>
      <Switch>
        <Route
          exact
          path={`${match.url}`}
          render={props => (
            <ErrorBoundary errMsg="Something went wrong in displaying the course page.">
              <FilterableTableCourses {...props} />
            </ErrorBoundary>
          )}
        />
        <Route
          path={`${match.url}/:id`}
          render={props => (
            <ErrorBoundary errMsg="Something went wrong in displaying the course page.">
              <AsyncCourse {...props} />
            </ErrorBoundary>
          )}
        />
      </Switch>
    </ContainerAdminCourse>
  )
}

export default Courses
