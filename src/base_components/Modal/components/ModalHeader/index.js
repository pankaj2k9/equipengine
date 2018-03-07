import React from 'react'
import PropTypes from 'prop-types'
//
import { Modal } from 'react-bootstrap'

const ModalHeader = ({children}) => (
  <Modal.Header closeButton>
    {children}
  </Modal.Header>
)

ModalHeader.propTypes = {
  children: PropTypes.element.isRequired
}

export default ModalHeader
