import React from "react"
import { Route, Switch } from "react-router-dom"
// for our breadcrumbs
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
// component
import ErrorBoundary from "base_components/ErrorBoundary"
import FilterableTableCourses from "./components/FilterableTableCourses"
import ContainerAdminCourse from "scenes/Admin/CourseCreator/ContainerAdminCourse"
// Scenes
import Loader from "base_components/Loader"
import Loadable from "react-loadable"

import ContentAdminCourse from "scenes/Admin/CourseCreator/ContentAdminCourse"

const AsyncCourse = Loadable({
  loader: () => import("./scenes/Course"),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
})

const Courses = ({ match }) => {
  return (
    <ContentAdminCourse>
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
    </ContentAdminCourse>
  )
}

export default Courses
