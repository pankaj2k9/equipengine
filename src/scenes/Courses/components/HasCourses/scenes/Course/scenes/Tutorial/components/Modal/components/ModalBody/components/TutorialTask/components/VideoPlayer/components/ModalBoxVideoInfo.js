import React from 'react';
import PropTypes from 'prop-types';

import ModalBox from '../../../../../../ModalBox.js';

const ModalBoxVideoInfo = ({ children }) => (
  <ModalBox style={modalBoxVideoInfoStyle}>{children}</ModalBox>
);

// styles
const modalBoxVideoInfoStyle = {
  width: '50%',
  float: 'left'
};

ModalBoxVideoInfo.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ])
};

export default ModalBoxVideoInfo;
