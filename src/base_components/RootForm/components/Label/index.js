import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Label = styled(({
  className,
  htmlFor,
  children
}) => (
  <label
    htmlFor={htmlFor}
    className={className}>
    {children}
  </label>
))`
  color: ${(props) => (props.light ? '#777777' : '#000000')};
  font-weight: 400;
`

Label.propTypes = {
  htmlFor: PropTypes.string,
  light: PropTypes.bool
}

export default Label
