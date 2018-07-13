import React from "react"
import PropTypes from "prop-types"
//
import Modal from "base_components/Modal"
import ModalHeader from "./components/ModalHeader"
import ModalBody from "./components/ModalBody"
import ModalFooter from "./components/ModalFooter"

// Modal facade
const AdminCourseModal = ({
  className,
  handleClose,
  isOpen,
  modal: {
    header: { title },
    body: { children: bodyChildren },
    footer: { buttonTitle, buttonHandler }
  }
}) => (
  <Modal
    className={className}
    isOpen={isOpen}
    onClose={handleClose}
    header={<ModalHeader title={title} />}
    body={<ModalBody>{bodyChildren}</ModalBody>}
    footer={
      <ModalFooter buttonTitle={buttonTitle} buttonHandler={buttonHandler} />
    }
  />
)

AdminCourseModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  modal: PropTypes.shape({
    header: PropTypes.shape({
      title: PropTypes.string.isRequired
    }),
    body: PropTypes.shape({
      children: PropTypes.element.isRequired
    }),
    footer: PropTypes.shape({
      buttonTitle: PropTypes.string.isRequired,
      buttonHandler: PropTypes.func.isRequired
    })
  }),
  className: PropTypes.string
}

export default AdminCourseModal
