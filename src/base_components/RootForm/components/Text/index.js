import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// for Text
const Text = styled(
  ({ className, name, placeholder, value, type, onChange }) => (
    <input
      className={className}
      name={name}
      placeholder={placeholder}
      type={type || "text"}
      value={value || ""}
      onChange={onChange}
      readOnly={!onChange}
    />
  )
)`
  border: 1px solid #dddddd;
  padding: 0.8em 1em;
  border-radius: 3px;
  font-size: 14px;
  width: 100%;
  height: 40px;

  &:focus {
    outline: 0;
  }

  ::placeholder {
    color: #c0c0c0;
  }
`

Text.proptTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string
}

export default Text
