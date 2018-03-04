import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
// components
import ErrorBoundary from 'base_components/ErrorBoundary'
import Breadcrumbs from 'base_components/Breadcrumbs'
// Scenes
import Loader from 'base_components/Loader'
import Loadable from 'react-loadable'
// Course library
const AsyncCourses = Loadable({
  loader: () => import('./scenes/Courses'),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
})
// Add-ons
const AsyncAddons = Loadable({
  loader: () => import('./scenes/Addons'),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
})

// the styled container of ContentAdminCourse component.
const ContainerContent = styled.div`
  margin-left: 75px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-left: 127px;
  }
`

const ContentAdminCourse = ({ match }) => (
  <ContainerContent>
    <Breadcrumbs />
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
    </Switch>
  </ContainerContent>
)

ContentAdminCourse.propTypes = {
  match: PropTypes.object.isRequired
}

export default ContentAdminCourse
