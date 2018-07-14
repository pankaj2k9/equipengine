import React from "react"
import PropTypes from "prop-types"

import { Root, CloseIcon } from "./elements"

const ModalHeader = ({ children, onClose }) => (
  <Root>
    {children} <CloseIcon onClick={onClose}>x</CloseIcon>
  </Root>
)

ModalHeader.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired
}

export default ModalHeader
