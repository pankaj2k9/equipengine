import React from "react"
import { Route, Switch } from "react-router-dom"
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"

import ErrorBoundary from "base_components/ErrorBoundary"
import features from "features"
import FilterableTableCourses from "./components/FilterableTableCourses"
import ContainerAdminCourse from "../components/ContainerAdminCourse"

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
              <features.course.pages.Course {...props} />
            </ErrorBoundary>
          )}
        />
      </Switch>
    </ContainerAdminCourse>
  )
}

export default Courses
