import React from 'react';
import { Route, Switch } from 'react-router-dom';
//
import ErrorBoundary from 'base_components/ErrorBoundary';
/* for code splitting - loadable */
import Loadable from 'react-loadable';
import Loader from 'base_components/Loader';

const AsyncDashboard = Loadable({
  loader: () => import('scenes/Dashboard'),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
});

const AsyncCourses = Loadable({
  loader: () => import('scenes/Courses'),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
});

const AsyncGroups = Loadable({
  loader: () => import('scenes/Groups'),
  loading: Loader,
  timeout: 10000
});

const AsyncMessages = Loadable({
  loader: () => import('scenes/Messages'),
  loading: Loader,
  timeout: 10000
});

const AsyncPeople = Loadable({
  loader: () => import('scenes/People'),
  loading: Loader,
  timeout: 10000
});

const AsyncNotifications = Loadable({
  loader: () => import('scenes/Notifications'),
  loading: Loader,
  timeout: 10000
});

const AsyncFiles = Loadable({
  loader: () => import('scenes/Files'),
  loading: Loader,
  timeout: 10000
});

const AsyncNotFound = Loadable({
  loader: () => import('scenes/NotFound'),
  loading: Loader,
  timeout: 10000
});

const PrivateRoutes = () => (
  <Switch>
    <Route
      exact
      strict
      path="/"
      render={props => {
        return (
          <ErrorBoundary errMsg="Something went wrong in displaying the dashboard page.">
            <AsyncDashboard {...props} />
          </ErrorBoundary>
        );
      }}
    />
    <Route
      strict
      path="/messages"
      component={props => {
        return (
          <ErrorBoundary errMsg="Something went wrong in displaying the messages page.">
            <AsyncMessages {...props} />
          </ErrorBoundary>
        );
      }}
    />
    <Route
      strict
      path="/notifications"
      component={props => {
        return (
          <ErrorBoundary errMsg="Something went wrong in displaying the notifications page.">
            <AsyncNotifications {...props} />
          </ErrorBoundary>
        );
      }}
    />
    <Route
      strict
      path="/courses"
      render={props => {
        return (
          <ErrorBoundary errMsg="Something went wrong in displaying the courses page.">
            <AsyncCourses {...props} />
          </ErrorBoundary>
        );
      }}
    />
    <Route
      strict
      path="/groups"
      component={props => {
        return (
          <ErrorBoundary errMsg="Something went wrong in displaying the groups page.">
            <AsyncGroups {...props} />
          </ErrorBoundary>
        );
      }}
    />
    <Route
      strict
      path="/people"
      component={props => {
        return (
          <ErrorBoundary errMsg="Something went wrong in displaying the people page.">
            <AsyncPeople {...props} />
          </ErrorBoundary>
        );
      }}
    />
    <Route
      strict
      path="/files"
      component={props => {
        return (
          <ErrorBoundary errMsg="Something went wrong in displaying the files page.">
            <AsyncFiles {...props} />
          </ErrorBoundary>
        );
      }}
    />
    {/* no routes match */}
    <Route component={AsyncNotFound} />
  </Switch>
);

export default PrivateRoutes;
