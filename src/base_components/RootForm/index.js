import React from 'react';
import PropTypes from 'prop-types';

import Text from './components/Text';
import { Checkbox, CheckboxCircle } from './components/Checkbox';

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

export { RootForm as default, Text, Checkbox, CheckboxCircle };
