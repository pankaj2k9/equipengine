import React from 'react';
import { Switch, Route } from 'react-router-dom';

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

const AsyncTeacherControls = Loadable({
  loader: () => import('scenes/TeacherControls'),
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

const App = () => {
  return (
    <div>
      <Route path="/" component={AsyncMainBars} />
      <Main>
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
            path="/teacher-controls"
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
          {/* no routes match */}
          <Route component={AsyncNotFound} />
        </Switch>
      </Main>
    </div>
  );
};

export default App;
