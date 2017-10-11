import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Button = ({ text }) => {
  return (
    <button className="Button" type="button">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired
};

export default Button;
