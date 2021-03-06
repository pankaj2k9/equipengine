import React from "react"
import PropTypes from "prop-types"
//
import Button from "base_components/RootButton"
import Modal from "base_components/Modal"
import ModalHeader from "./components/ModalHeader"

// Modal facade
const EntityModal = ({
  className,
  isOpen,
  title,
  submitButtonTitle,
  isSubmitting,
  children,
  onClose,
  onSubmit
}) => (
  <Modal
    className={className}
    isOpen={isOpen}
    onClose={onClose}
    header={<ModalHeader title={title} />}
    body={children}
    footer={
      <Button disabled={isSubmitting} onClick={onSubmit}>
        {submitButtonTitle || "Save"}
      </Button>
    }
  />
)

EntityModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  submitButtonTitle: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default EntityModal
