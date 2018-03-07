import React from 'react'
import PropTypes from 'prop-types'
//
import { Modal } from 'react-bootstrap'

const ModalBody = ({children}) => (
  <Modal.Body>
    {children}
  </Modal.Body>
)

ModalBody.propTypes = {
  children: PropTypes.element.isRequired
}

export default ModalBody
