import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
//
import ErrorBoundary from 'base_components/ErrorBoundary';
/* for code splitting - loadable */
import Loadable from 'react-loadable';
import Loader from 'base_components/Loader';

const AsyncLogin = Loadable({
  loader: () => import('scenes/Login'),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
});

const PublicRoutes = () => (
  <Fragment>
    <Route
      path="/login"
      component={props => {
        return (
          <ErrorBoundary errMsg="Something went wrong in displaying the login page.">
            <AsyncLogin {...props} />
          </ErrorBoundary>
        );
      }}
    />
  </Fragment>
);

export default PublicRoutes;
