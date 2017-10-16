import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { BreadcrumbsItem } from 'react-breadcrumbs-dynamic';

import Modal from './components/Modal';

const Tutorial = ({ match }) => {
  return (
    <div>
      <BreadcrumbsItem to={`${match.url}`}>tutorial</BreadcrumbsItem>
      {/* <Modal /> */}
    </div>
  );
};

Tutorial.propTypes = {};

export default Tutorial;
