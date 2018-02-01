import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { identical, isEmpty, isNil } from 'ramda';

// base_components
import Main from 'base_components/Main';

/* for code splitting - loadable */
import Loadable from 'react-loadable';
import Loader from 'base_components/Loader';

// import all routes
import publicRoutes from '../publicRoutes';
import privateRoutes from '../privateRoutes';
import teacherRoutes from '../teacherRoutes';
import adminRoutes from '../adminRoutes';

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

/**
 * InitRoutes component will render either Public or Private routes based on the type.
 * If the type is empty, we need to render public. Else render private.
 */
const InitRoutes = ({ type }) => (
  <div>
    {isEmpty(type) ? (
      <Switch>
        {publicRoutes.map(route => (
          <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            strict={route.strict}
            component={
              !isNil(route.AsyncComponent) ? route.AsyncComponent : null
            }
            render={
              !isNil(route.AsyncRenderComponent)
                ? route.AsyncRenderComponent
                : null
            }
          />
        ))}
        <Route component={AsyncNotFound} />
      </Switch>
    ) : (
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
        <Main type={type}>
          <Switch>
            {[...privateRoutes, ...teacherRoutes, ...adminRoutes].map(route => (
              <Route
                key={route.id}
                path={route.path}
                exact={route.exact}
                strict={route.strict}
                component={
                  !isNil(route.AsyncComponent) ? route.AsyncComponent : null
                }
                render={
                  !isNil(route.AsyncRenderComponent)
                    ? route.AsyncRenderComponent
                    : null
                }
              />
            ))}
            <Route component={AsyncNotFound} />
          </Switch>
        </Main>
      </div>
    )}
  </div>
);

InitRoutes.propTypes = {
  type: PropTypes.string
};

export default InitRoutes;
