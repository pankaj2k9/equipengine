import React from 'react'
import PropTypes from 'prop-types'
//
import { Modal } from 'react-bootstrap'

const ModalFooter = ({children}) => (
  <Modal.Footer>
    {children}
  </Modal.Footer>
)

ModalFooter.propTypes = {
  children: PropTypes.element.isRequired
}

export default ModalFooter
