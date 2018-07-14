import React from "react"
import PropTypes from "prop-types"
//
import { Modal as RootModal } from "react-bootstrap"
import ModalHeader from "./components/ModalHeader"
import ModalBody from "./components/ModalBody"
import ModalFooter from "./components/ModalFooter"
import Form from "base_components/RootForm"

// TODO: Accept className for our ModalBody
const Modal = ({ isOpen, onClose, header, body, footer, className }) => (
  <RootModal show={isOpen} onHide={onClose} className={className}>
    {/* TODO: We gonna add option if the modal is used for form or not */}
    <Form>
      <ModalHeader onClose={onClose}>{header}</ModalHeader>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>{footer}</ModalFooter>
    </Form>
  </RootModal>
)

Modal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  header: PropTypes.element,
  body: PropTypes.element,
  footer: PropTypes.element
}

export default Modal
