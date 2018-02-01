import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { isNil } from 'ramda';
/* for code splitting - loadable */
import Loadable from 'react-loadable';
import Loader from 'base_components/Loader';
//
import routes from './routes';

const AsyncNotFound = Loadable({
  loader: () => import('scenes/NotFound'),
  loading: Loader,
  timeout: 10000
});

const PublicRoutes = () => (
  <Switch>
    {routes.map(route => (
      <Route
        key={route.id}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        component={!isNil(route.AsyncComponent) ? route.AsyncComponent : null}
        render={
          !isNil(route.AsyncRenderComponent) ? route.AsyncRenderComponent : null
        }
      />
    ))}
    <Route component={AsyncNotFound} />
  </Switch>
);

export default PublicRoutes;
