import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// for checkbox
const Checkbox = styled(({ name, className }) => (
  <input className={className} name={name} type="checkbox" />
))``;

Checkbox.proptTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Checkbox;
