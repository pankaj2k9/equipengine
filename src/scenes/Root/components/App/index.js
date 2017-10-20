import React from 'react';
import { Switch, Route } from 'react-router-dom';

// base_components
import Main from 'base_components/Main';
import ErrorBoundary from 'base_components/ErrorBoundary';
import MainBars from 'base_components/SidebarTransition';

/* for code splitting - loadable */
import Loadable from 'react-loadable';
import Loader from 'base_components/Loader';
/* create our async component in here
 * this will optimize the loading of components of our app
 * dynamically importing our scenes here*/
const AsyncMainBars = Loadable({
  loader: () => import('base_components/SidebarTransition'),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
});

const AsyncCourses = Loadable({
  loader: () => import('scenes/Courses'),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
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
      <Route path="/" component={MainBars} />
      <Main>
        <Switch>
          <Route exact path="/" component={AsyncCourses} />
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
          {/* no routes match */}
          <Route component={AsyncNotFound} />
        </Switch>
      </Main>
    </div>
  );
};

export default App;
