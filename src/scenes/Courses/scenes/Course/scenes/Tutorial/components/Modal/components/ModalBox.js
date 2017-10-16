import React from 'react';
import PropTypes from 'prop-types';

import Box from 'base_components/Box';

const ModalBox = ({ children, style }) => (
  <Box
    style={{
      padding: '3%',
      display: 'flex',
      ...style
    }}
  >
    {children}
  </Box>
);

ModalBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  style: PropTypes.object
};

export default ModalBox;
