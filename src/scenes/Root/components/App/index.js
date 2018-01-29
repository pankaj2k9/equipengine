import React from 'react';
import PropTypes from 'prop-types';
//
import InitRoutes from './InitRoutes';

// App component will render all components which are associated to the URL.
const App = ({ loggedUser: { type } }) => <InitRoutes type={type} />;

App.propTypes = {
  loggedUser: PropTypes.object
};

export default App;
