import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
/* for code splitting - loadable */
import Loadable from 'react-loadable';
import Loader from 'base_components/Loader';
//
import PrivateRoutes from './components/PrivateRoutes';

const AsyncLogin = Loadable({
  loader: () => import('scenes/Login'),
  loading: Loader, // before this component gets loaded, we will render first this Loader component.
  timeout: 10000
});

/**
 * App component will render either Public or Private routes based on the type.
 * If the type is empty, we need to render public. Else render private.
 */
const App = ({ loggedUser }) => (
  <Fragment>
    <Switch>
      <Route path="/login" component={AsyncLogin} />
      <Route
        path="/"
        component={props => <PrivateRoutes {...props} type={loggedUser.type} />}
      />
    </Switch>
  </Fragment>
);

App.propTypes = {
  loggedUser: PropTypes.object
};

export default App;