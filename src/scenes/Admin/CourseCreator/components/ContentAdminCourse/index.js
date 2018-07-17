import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Route, Switch, Redirect } from "react-router-dom"
// Components
import ErrorBoundary from "base_components/ErrorBoundary"
import Breadcrumbs from "base_components/Breadcrumbs"
// Scenes
import Loadable from "base_components/Loadable"
// New course modal
import NewCourseModal from "./scenes/NewCourseModal"
// Course library
const AsyncCourses = Loadable({
  loader: () => import("./scenes/Courses")
})
// Add-ons
const AsyncAddons = Loadable({
  loader: () => import("./scenes/Addons")
})
// Videos
const AsyncVideos = Loadable({
  loader: () => import("./scenes/Videos")
})

// The styled container of ContentAdminCourse component.
const ContainerContent = styled.div`
  margin-left: 75px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-left: 91px; /* courses sidebar width */
  }
`

const ContentAdminCourse = ({ match, onClose, isOpen }) => (
  <ContainerContent>
    <Breadcrumbs />
    <NewCourseModal handleClose={onClose} isOpen={isOpen} />
    <Switch>
      <Route
        strict
        path={`${match.url}/courses`}
        render={props => (
          <ErrorBoundary errMsg="Something went wrong in displaying the courses page.">
            <AsyncCourses {...props} />
          </ErrorBoundary>
        )}
      />
      <Route
        strict
        path={`${match.url}/add-ons`}
        render={props => (
          <ErrorBoundary errMsg="Something went wrong in displaying the courses page.">
            <AsyncAddons {...props} />
          </ErrorBoundary>
        )}
      />
      <Route
        strict
        path={`${match.url}/videos`}
        render={props => (
          <ErrorBoundary errMsg="Something went wrong in displaying the courses page.">
            <AsyncVideos {...props} />
          </ErrorBoundary>
        )}
      />
      {/* redirect to courses library if no match */}
      <Redirect to={`${match.url}/courses`} />
    </Switch>
  </ContainerContent>
)

ContentAdminCourse.propTypes = {
  match: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default ContentAdminCourse
