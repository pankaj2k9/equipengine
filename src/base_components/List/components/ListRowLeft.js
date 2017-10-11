import React from 'react';
import PropTypes from 'prop-types';

const ListRowLeft = ({ children }) => {
  return <div className="List__row__left">{children}</div>;
};

ListRowLeft.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default ListRowLeft;
