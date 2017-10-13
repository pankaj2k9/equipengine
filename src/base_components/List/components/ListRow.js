import React from 'react';
import PropTypes from 'prop-types';

const ListRow = ({ children }) => {
  return <li className="List__row">{children}</li>;
};

ListRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default ListRow;
