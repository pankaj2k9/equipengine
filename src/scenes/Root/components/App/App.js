import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';
//
import PublicRoutes from './components/PublicRoutes';
import PrivateRoutes from './components/PrivateRoutes';

/**
 * App component will render either Public or Private routes based on the type.
 * If the type is empty, we need to render public. Else render private.
 */
const App = ({ loggedUser }) => (
  <Fragment>
    {isEmpty(loggedUser) ? (
      <PublicRoutes />
    ) : (
      <PrivateRoutes type={loggedUser.type} />
    )}{' '}
    />}
  </Fragment>
);

App.propTypes = {
  loggedUser: PropTypes.object
};

export default App;
