import React from 'react'
import PropTypes from 'prop-types'
//
import { Modal as RootModal } from 'react-bootstrap'
import ModalHeader from './components/ModalHeader'
import ModalBody from './components/ModalBody'
import ModalFooter from './components/ModalFooter'
import Form from 'base_components/RootForm'

const Modal = ({isOpen, handleClose, header, body, footer}) => (
  <RootModal show={isOpen} onHide={handleClose}>
    {/* TODO: We gonna add option if the modal is used for form or not */}
    <Form>
      <ModalHeader>{header}</ModalHeader>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </Form>
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
