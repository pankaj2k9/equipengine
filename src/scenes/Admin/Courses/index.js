import React from "react"
import { Route, Switch } from "react-router-dom"
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"

import ErrorBoundary from "base_components/ErrorBoundary"
// TODO use existing Admin Course instead of Course
import features from "features"
import FilterableTableCourses from "./components/FilterableTableCourses"
import ContainerAdminCourse from "scenes/Admin/CourseCreator/ContainerAdminCourse"
import ContentAdminCourse from "scenes/Admin/CourseCreator/ContentAdminCourse"

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
                <features.course.pages.Course {...props} />
              </ErrorBoundary>
            )}
          />
        </Switch>
      </ContainerAdminCourse>
    </ContentAdminCourse>
  )
}

export default Courses
