import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
//
import { Modal } from "react-bootstrap"

const ExtendModalFooter = styled(Modal.Footer)`
  padding: 20px 35px;
  border-top: 0;
  border-bottom: 1px solid #d8d8d8;
  text-align: left;
`

const ModalFooter = ({ children }) => (
  <ExtendModalFooter>{children}</ExtendModalFooter>
)

ModalFooter.propTypes = {
  children: PropTypes.element.isRequired
}

export default ModalFooter
