import React from "react"
import PropTypes from "prop-types"
//
import { Modal as RootModal } from "react-bootstrap"
import ModalHeader from "./components/ModalHeader"
import ModalBody from "./components/ModalBody"
import ModalFooter from "./components/ModalFooter"

const Modal = ({ isOpen, onClose, header, body, footer, className }) => (
  <RootModal show={isOpen} onHide={onClose} className={className}>
    <ModalHeader onClose={onClose}>{header}</ModalHeader>
    <ModalBody>{body}</ModalBody>
    <ModalFooter>{footer}</ModalFooter>
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
