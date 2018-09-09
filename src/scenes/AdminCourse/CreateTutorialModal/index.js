import React from "react"
import PropTypes from "prop-types"
import { compose, pure } from "recompose"
//
import EntityModal from "base_components/EntityModal"
import form from "hoc/form"
import TutorialForm, { validationSchema } from "../TutorialForm"
import Loading from "base_components/Loading"
import withFormValidation from "hoc/withFormValidation"

const CreateTutorialModal = ({
  isOpen,
  isSubmitting,
  fields,
  onChange,
  onClose,
  handleSubmit
}) => (
  <EntityModal
    title="Create new tutorial"
    isOpen={isOpen}
    onClose={onClose}
    isSubmitting={isSubmitting}
    onSubmit={handleSubmit}
  >
    {isSubmitting ? (
      <Loading />
    ) : (
      <TutorialForm fields={fields} onChange={onChange} />
    )}
  </EntityModal>
)

CreateTutorialModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default compose(
  form({
    title: "",
    description: ""
  }),
  withFormValidation({ validationSchema }),
  pure
)(CreateTutorialModal)
