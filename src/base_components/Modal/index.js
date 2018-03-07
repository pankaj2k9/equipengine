import React from 'react'
import PropTypes from 'prop-types'
//
import { Modal as RootModal } from 'react-bootstrap'
import ModalHeader from './components/ModalHeader'
import ModalBody from './components/ModalBody'
import ModalFooter from './components/ModalFooter'

const Modal = ({isOpen, handleClose, header, body, footer}) => (
  <RootModal show={isOpen} onHide={handleClose}>
    <ModalHeader>{header}</ModalHeader>
    <ModalBody>{body}</ModalBody>
    <ModalFooter>{footer}</ModalFooter>
  </RootModal>
)

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  header: PropTypes.element,
  body: PropTypes.element,
  footer: PropTypes.element
}

export default Modal
