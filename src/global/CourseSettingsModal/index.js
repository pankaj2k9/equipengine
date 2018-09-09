import React from "react"
import PropTypes from "prop-types"
import { compose, pure } from "recompose"
//
import CourseSettingsForm, { validationSchema } from "../CourseSettingsForm"
import EntityModal from "base_components/EntityModal"
import form from "hoc/form"
import Loading from "base_components/Loading"
import withFormValidation from "hoc/withFormValidation"

const CourseSettingsModal = ({
  isOpen,
  isSubmitting,
  fields,
  onChange,
  onClose,
  title,
  submitButtonTitle,
  handleSubmit
}) => (
  <EntityModal
    title={title || "Create a new course"}
    submitButtonTitle={submitButtonTitle}
    isOpen={isOpen}
    onClose={onClose}
    isSubmitting={isSubmitting}
    onSubmit={handleSubmit}
  >
    {isSubmitting ? (
      <Loading />
    ) : (
      <CourseSettingsForm fields={fields} onChange={onChange} />
    )}
  </EntityModal>
)

CourseSettingsModal.propTypes = {
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
)(CourseSettingsModal)
