import React from 'react';
import PropTypes from 'prop-types';

import Breadcrumbs from 'base_components/Breadcrumbs';
import Tables from 'base_components/Tables';
import './styles.css';

const Main = () => {
  return (
    <main className="Main">
      <Breadcrumbs />
      <Tables />
    </main>
  );
};

export default Main;
