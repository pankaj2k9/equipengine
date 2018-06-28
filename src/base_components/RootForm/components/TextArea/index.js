import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// for TextArea
const TextArea = styled(({ name, placeholder, className, row, value, onChange }) => (
  <textarea
    placeholder={placeholder}
    name={name}
    className={className}
    cols='30'
    rows={row}
    value={value || ''}
    onChange={onChange}
  />
))`
  border: 1px solid #dddddd;
  padding: 0.8em 1em;
  border-radius: 3px;
  font-size: 14px;
  width: 100%;
  resize: none;

  &:focus {
    outline: 0;
  }

  ::placeholder {
    color: #c0c0c0;
  }
`

TextArea.proptTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  row: PropTypes.number
}

export default TextArea
