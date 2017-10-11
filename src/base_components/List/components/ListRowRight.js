import React from 'react';
import PropTypes from 'prop-types';

const ListRowRight = ({ children }) => {
  return <div className="List__row__right">{children}</div>;
};

ListRowRight.propTypes = {
  children: PropTypes.element.isRequired
};

export default ListRowRight;
