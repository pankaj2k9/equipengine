import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

export default RootForm;

// for Text
export const Text = styled(({ name, placeholder, className }) => (
  <input
    className={className}
    name={name}
    placeholder={placeholder}
    type="text"
    value=""
  />
))`
  border: 1px solid #dddddd;
  padding: 0.8em 1em;
  border-radius: 3px;
  font-size: 14px;
  width: 100%;

  ::placeholder {
    color: #969696;
  }
`;

Text.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};
