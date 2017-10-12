import React from 'react';
import PropTypes from 'prop-types';

const ListRowRight = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

ListRowRight.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string.isRequired
};

export default ListRowRight;
