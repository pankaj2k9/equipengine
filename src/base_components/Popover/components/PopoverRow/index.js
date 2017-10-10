import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const PopoverRow = ({ text }) => {
  return (
    <li className="PopoverRow">
      <a href="">{text}</a>
    </li>
  );
};

PopoverRow.propTypes = {
  text: PropTypes.string.isRequired
};

export default PopoverRow;
