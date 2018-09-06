import React from "react"
import PropTypes from "prop-types"
import { compose, pure } from "recompose"

import EntityModal from "base_components/EntityModal"
import Loading from "base_components/Loading"
import form from "hoc/form"
import withFormValidation from "hoc/withFormValidation"

import ThreadForm, { validationSchema } from "../ThreadForm"

const CreateThreadModal = ({
  isOpen,
  isSubmitting,
  fields,
  onChange,
  onClose,
  handleSubmit
}) => (
  <EntityModal
    title="Create new thread"
    isOpen={isOpen}
    onClose={onClose}
    isSubmitting={isSubmitting}
    onSubmit={handleSubmit}
  >
    {isSubmitting ? (
      <Loading />
    ) : (
      <ThreadForm fields={fields} onChange={onChange} />
    )}
  </EntityModal>
)

CreateThreadModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default compose(
  form({ name: "", content: "" }),
  withFormValidation({ validationSchema }),
  pure
)(CreateThreadModal)
