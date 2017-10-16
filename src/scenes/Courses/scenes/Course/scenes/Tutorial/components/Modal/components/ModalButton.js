import React from 'react';
import PropTypes from 'prop-types';

const ModalButton = ({ style, children, handleClick }) => (
  <button
    onClick={handleClick}
    style={{
      color: '#000000',
      background: 'none',
      border: 0,
      ...style
    }}
  >
    {children}
  </button>
);

ModalButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  style: PropTypes.object,
  handleClick: PropTypes.func.isRequired
};

export default ModalButton;
