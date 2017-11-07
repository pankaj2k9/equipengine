import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Text from './components/Text';
import Checkbox from './components/Checkbox';

const RootForm = ({ children, className }) => (
  <form className={className} action="">
    {children}
  </form>
);

RootForm.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  className: PropTypes.string
};

export { RootForm as default, Text, Checkbox };
