import React from "react"
import PropTypes from "prop-types"
//
import CreateEntityModal from "base_components/CreateEntityModal"
import BodyContent from "./components/BodyContent"

const NewCourseModal = ({ handleClose, isOpen }) => {
  return (
    <CreateEntityModal
      isOpen={isOpen}
      title="Create a new course"
      onClose={handleClose}
      onSubmit={() => {
        //console.log('Create new course!')
      }}
    >
      <BodyContent />
    </CreateEntityModal>
  )
}

NewCourseModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default NewCourseModal
