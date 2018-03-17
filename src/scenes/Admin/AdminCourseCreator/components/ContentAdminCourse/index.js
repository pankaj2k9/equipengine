import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
// Components
import ErrorBoundary from 'base_components/ErrorBoundary'
import Breadcrumbs from 'base_components/Breadcrumbs'
// Scenes
import Loader from 'base_components/Loader'
import Loadable from 'react-loadable'
// New course modal
import NewCourseModal from './scenes/NewCourseModal'
// Course library
const AsyncCourses = Loadable({
  loader: () => import('./scenes/Courses'),
  loading: Loader,
  timeout: 10000
})
// Add-ons
const AsyncAddons = Loadable({
  loader: () => import('./scenes/Addons'),
  loading: Loader,
  timeout: 10000
})
// Videos
const AsyncVideos = Loadable({
  loader: () => import('./scenes/Videos'),
  loading: Loader,
  timeout: 10000
})

// The styled container of ContentAdminCourse component.
const ContainerContent = styled.div`
  margin-left: 75px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-left: 127px;
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
        render={(props) => (
          <ErrorBoundary errMsg='Something went wrong in displaying the courses page.'>
            <AsyncCourses {...props} />
          </ErrorBoundary>
        )}
      />
      <Route
        strict
        path={`${match.url}/add-ons`}
        render={(props) => (
          <ErrorBoundary errMsg='Something went wrong in displaying the courses page.'>
            <AsyncAddons {...props} />
          </ErrorBoundary>
        )}
      />
      <Route
        strict
        path={`${match.url}/videos`}
        render={(props) => (
          <ErrorBoundary errMsg='Something went wrong in displaying the courses page.'>
            <AsyncVideos {...props} />
          </ErrorBoundary>
        )}
      />
    </Switch>
  </ContainerContent>
)

ContentAdminCourse.propTypes = {
  match: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default ContentAdminCourse
