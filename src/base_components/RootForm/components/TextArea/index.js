import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// for TextArea
const TextArea = styled(({ name, placeholder, className }) => (
  <textarea
    placeholder={placeholder}
    name={name}
    className={className}
    cols="30"
    rows="5"
  />
))`
  border: 1px solid #dddddd;
  padding: 0.8em 1em;
  border-radius: 3px;
  font-size: 14px;
  width: 100%;

  &:focus {
    outline: 0;
  }
  ::placeholder {
    color: #969696;
  }
`;

TextArea.proptTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string
};

export default TextArea;
