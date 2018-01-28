import React from 'react';
import { Route } from 'react-router-dom';
//
import ErrorBoundary from 'base_components/ErrorBoundary';
/* for code splitting - loadable */
import Loadable from 'react-loadable';
import Loader from 'base_components/Loader';

//------------------------- TEACHERS PANEL COMPONENT -------------------------------//
const AsyncGroupsActivity = Loadable({
  loader: () => import('scenes/TeacherGroupsActivity'),
  loading: Loader,
  timeout: 10000
});

const AsyncTeacherControls = Loadable({
  loader: () => import('scenes/TeacherControls'),
  loading: Loader,
  timeout: 10000
});

const AsyncTeacherFiles = Loadable({
  loader: () => import('scenes/TeacherFiles'),
  loading: Loader,
  timeout: 10000
});

const AsyncTeacherUserManager = Loadable({
  loader: () => import('scenes/TeacherUserManager'),
  loading: Loader,
  timeout: 10000
});

const TeacherRoutes = () => (
  <div>
    {/*-------------------------- TEACHERS PANEL PAGES ---------------------*/}
    <Route
      strict
      path="/teachers/groups-activity"
      component={props => {
        return (
          <ErrorBoundary errMsg="Something went wrong in displaying the groups activity page.">
            <AsyncGroupsActivity {...props} />
          </ErrorBoundary>
        );
      }}
    />
    <Route
      strict
      path="/teachers/submissions-activity"
      component={props => {
        return (
          <ErrorBoundary errMsg="Something went wrong in displaying the teachers controls page.">
            <AsyncTeacherControls {...props} />
          </ErrorBoundary>
        );
      }}
    />
    <Route
      strict
      path="/teachers/files"
      component={props => {
        return (
          <ErrorBoundary errMsg="Something went wrong in displaying the teachers files page.">
            <AsyncTeacherFiles {...props} />
          </ErrorBoundary>
        );
      }}
    />
    <Route
      strict
      path="/teachers/user-manager"
      component={props => {
        return (
          <ErrorBoundary errMsg="Something went wrong in displaying the teachers user manager page.">
            <AsyncTeacherUserManager {...props} />
          </ErrorBoundary>
        );
      }}
    />
  </div>
);

export default TeacherRoutes;
