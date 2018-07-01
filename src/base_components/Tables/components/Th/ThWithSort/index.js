import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { isNil } from "ramda"
//
import IconSort from "react-icons/lib/fa/caret-down"
//
import Th from ".."

const ThWithSort = ({ children, className }) => {
  if (isNil(children)) return <th />

  return (
    <Th className={className}>
      {children} <IconSort className={`${className}__icon`} />
    </Th>
  )
}
ThWithSort.propTypes = {
  children: PropTypes.oneOf([PropTypes.element, PropTypes.string])
}

export default styled(ThWithSort)`
  &__icon {
    margin-top: -3px;
  }
`
