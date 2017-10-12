import React from 'react';
import PropTypes from 'prop-types';

import Breadcrumbs from 'base_components/Breadcrumbs';
import './styles.css';

const Main = ({ children }) => {
  return (
    <main className="Main">
      <Breadcrumbs />
      {children}
    </main>
  );
};

Main.propTypes = {
  children: PropTypes.element.isRequired
};

export default Main;
