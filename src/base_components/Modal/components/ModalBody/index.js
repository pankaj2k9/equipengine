import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
//
import { Modal } from "react-bootstrap"

const ExtendModalBody = styled(Modal.Body)`
  padding: 20px 35px;
  border-bottom: 1px solid #d8d8d8;
`

const ModalBody = ({ children }) => (
  <ExtendModalBody>{children}</ExtendModalBody>
)

ModalBody.propTypes = {
  children: PropTypes.element.isRequired
}

export default ModalBody
