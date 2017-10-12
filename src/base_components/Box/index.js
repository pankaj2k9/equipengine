import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Box = ({ children }) => {
  return <div className="Box">{children}</div>;
};

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ])
};

export default Box;
