import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Main = ({ children }) => {
  return <main className="Main">{children}</main>;
};

Main.propTypes = {
  children: PropTypes.element.isRequired
};

export default Main;
