import React from "react"
import { Route, Switch } from "react-router-dom"
import styled from "styled-components"

import CoursesContainer from "scenes/AdminCoursesContainer"
import BorderedTitle from "base_components/BorderedTitle"
import ErrorBoundary from "base_components/ErrorBoundary"
import CoursesActionBar from "../CoursesActionBar"
import CoursesTable from "../CoursesTable"
import features from "features"

const StyledCoursesActionBar = styled(CoursesActionBar)`
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.lightgray};
`

const StyledCoursesTable = styled(CoursesTable)`
  padding: 16px;
`

const AdminCoursesPage = props => {
  const { match } = props
  return (
    <CoursesContainer>
      <BorderedTitle title="Course Creator" />
      <StyledCoursesActionBar />

      <div>
        <Switch>
          <Route
            exact
            path={`${match.url}`}
            render={props => (
              <ErrorBoundary errMsg="Something went wrong in displaying the course page.">
                <StyledCoursesTable {...props} />
              </ErrorBoundary>
            )}
          />
          <Route
            exact
            path={`${match.url}/:courseId`}
            render={props => (
              <ErrorBoundary errMsg="Something went wrong in displaying the course page.">
                <features.adminCourse.pages.Course {...props} />
              </ErrorBoundary>
            )}
          />
        </Switch>
      </div>
    </CoursesContainer>
  )
}

export default AdminCoursesPage
