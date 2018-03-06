import React from 'react'
import PropTypes from 'prop-types'
//
import { Modal } from 'react-bootstrap'
import Button from 'base_components/RootButton'

const NewCourse = ({handleClose, isOpen}) => (
  <Modal show={isOpen} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
        cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
        dui. Donec ullamcorper nulla non metus auctor fringilla.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={this.handleClose}>Close</Button>
    </Modal.Footer>
  </Modal>
)

NewCourse.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default NewCourse
