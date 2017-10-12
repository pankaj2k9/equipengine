import React from 'react';
import PropTypes from 'prop-types';

const ListRowLeft = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

ListRowLeft.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string.isRequired
};

export default ListRowLeft;
