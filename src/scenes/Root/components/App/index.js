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

// import all routes
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import TeacherRoutes from './TeacherRoutes';
import AdminRoutes from './AdminRoutes';

/* create our async component in here
 * this will optimize the loading of components of our app
 * dynamically importing our scenes here*/
const AsyncMainBars = Loadable({
  loader: () => import('base_components/SidebarTransition'),
  loading: () => null, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
});

const AsyncNavbarAdmin = Loadable({
  loader: () => import('base_components/NavbarAdmin'),
  loading: Loader,
  timeout: 10000
});

const AsyncNotFound = Loadable({
  loader: () => import('scenes/NotFound'),
  loading: Loader,
  timeout: 10000
});

// FIXME: Fix the not found page.
const App = ({ loggedUser: { type } }) => {
  return (
    <div>
      {/*-------------------------- PRIVATE COMPONENTS ---------------------*/}
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
      <Switch>
        <Main type={type}>
          <PrivateRoutes />
          <TeacherRoutes />
          <AdminRoutes />
          {/* no routes match */}
          <Route component={AsyncNotFound} />
        </Main>
      </Switch>
    </div>
  );
};

App.propTypes = {
  loggedUser: PropTypes.object
};

export default App;
