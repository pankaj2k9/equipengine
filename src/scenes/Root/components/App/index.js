import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { identical } from 'ramda';

// base_components
import Main from 'base_components/Main';
import ErrorBoundary from 'base_components/ErrorBoundary';

/* for code splitting - loadable */
import Loadable from 'react-loadable';
import Loader from 'base_components/Loader';

/* create our async component in here
 * this will optimize the loading of components of our app
 * dynamically importing our scenes here*/
const AsyncMainBars = Loadable({
  loader: () => import('base_components/SidebarTransition'),
  loading: () => null, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
});

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

//------------------------- ADMIN PANEL COMPONENT -------------------------------//
const AsyncNavbarAdmin = Loadable({
  loader: () => import('base_components/NavbarAdmin'),
  loading: Loader,
  timeout: 10000
});

const AsyncAdminGroupManager = Loadable({
  loader: () => import('scenes/Admin/AdminGroupManager'),
  loading: Loader,
  timeout: 10000
});

const AsyncNotFound = Loadable({
  loader: () => import('scenes/NotFound'),
  loading: Loader,
  timeout: 10000
});

const App = ({ loggedUser: { type } }) => {
  return (
    <div>
      <Route
        path="/"
        render={() =>
          // conditional rendering.
          identical(type, 'Student') || identical(type, 'Teacher') ? (
            <AsyncMainBars />
          ) : (
            <AsyncNavbarAdmin />
          )}
      />
      <Main type={type}>
        <Switch>
          <Route
            exact
            strict
            path="/"
            render={props => {
              return (
                <ErrorBoundary errMsg="Something went wrong in displaying the courses page.">
                  <AsyncDashboard {...props} />
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
                <ErrorBoundary errMsg="Something went wrong in displaying the teachers controls page.">
                  <AsyncGroups {...props} />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            strict
            path="/messages"
            component={props => {
              return (
                <ErrorBoundary errMsg="Something went wrong in displaying the teachers controls page.">
                  <AsyncMessages {...props} />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            strict
            path="/people"
            component={props => {
              return (
                <ErrorBoundary errMsg="Something went wrong in displaying the teachers controls page.">
                  <AsyncPeople {...props} />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            strict
            path="/notifications"
            component={props => {
              return (
                <ErrorBoundary errMsg="Something went wrong in displaying the teachers controls page.">
                  <AsyncNotifications {...props} />
                </ErrorBoundary>
              );
            }}
          />
          <Route
            strict
            path="/files"
            component={props => {
              return (
                <ErrorBoundary errMsg="Something went wrong in displaying the teachers controls page.">
                  <AsyncFiles {...props} />
                </ErrorBoundary>
              );
            }}
          />

          {/*-------------------------- TEACHERS PANEL PAGES ---------------------*/}

          <Route
            strict
            path="/teachers/groups-activity"
            component={props => {
              return (
                <ErrorBoundary errMsg="Something went wrong in displaying the teachers controls page.">
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
                <ErrorBoundary errMsg="Something went wrong in displaying the teachers controls page.">
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
                <ErrorBoundary errMsg="Something went wrong in displaying the teachers controls page.">
                  <AsyncTeacherUserManager {...props} />
                </ErrorBoundary>
              );
            }}
          />

          {/*-------------------------- ADMIN PANEL PAGES ---------------------*/}
          <Route
            strict
            path="/admin/group-manager"
            component={props => {
              return (
                <ErrorBoundary errMsg="Something went wrong in displaying the teachers controls page.">
                  <AsyncAdminGroupManager {...props} />
                </ErrorBoundary>
              );
            }}
          />

          {/* no routes match */}
          <Route component={AsyncNotFound} />
        </Switch>
      </Main>
    </div>
  );
};

App.propTypes = {
  loggedUser: PropTypes.object
};

export default App;
