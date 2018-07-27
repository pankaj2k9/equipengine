import React from "react"
import PropTypes from "prop-types"
import { compose, pure } from "recompose"
//
import CreateCourseForm, { validationSchema } from "../CreateCourseForm"
import CreateEntityModal from "base_components/CreateEntityModal"
import form from "hoc/form"
import Loading from "base_components/Loading"
import withFormValidation from "hoc/withFormValidation"

const CreateCourseModal = ({
  isOpen,
  isSubmitting,
  fields,
  onChange,
  onClose,
  handleSubmit
}) => (
  <CreateEntityModal
    title="Create a new course"
    isOpen={isOpen}
    onClose={onClose}
    isSubmitting={isSubmitting}
    onSubmit={handleSubmit}
  >
    {isSubmitting ? (
      <Loading />
    ) : (
      <CreateCourseForm fields={fields} onChange={onChange} />
    )}
  </CreateEntityModal>
)

CreateCourseModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default compose(
  form({
    name: "",
    description: "",
    mainImage: null,
    courseImage: null
  }),
  withFormValidation({ validationSchema }),
  pure
)(CreateCourseModal)
