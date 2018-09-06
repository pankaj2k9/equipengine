import React from "react"
import PropTypes from "prop-types"
import { compose, pure } from "recompose"

import form from "hoc/form"
import withFormValidation from "hoc/withFormValidation"

import EntityModal from "base_components/EntityModal"
import Loading from "base_components/Loading"

import CreateVideoForm, { validationSchema } from "./CreateVideoForm"

const CreateVideoModal = ({
  isOpen,
  isSubmitting,
  fields,
  onChange,
  onClose,
  handleSubmit
}) => (
  <EntityModal
    title="Upload video"
    isOpen={isOpen}
    onClose={onClose}
    isSubmitting={isSubmitting}
    onSubmit={handleSubmit}
    submitButtonTitle="Save"
  >
    {isSubmitting ? (
      <Loading />
    ) : (
      <CreateVideoForm fields={fields} onChange={onChange} />
    )}
  </EntityModal>
)

CreateVideoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default compose(
  form(
    {
      file: null,
      title: ""
    },
    ["videoRef"]
  ),
  withFormValidation({ validationSchema }),
  pure
)(CreateVideoModal)
