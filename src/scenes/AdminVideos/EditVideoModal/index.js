import React from "react"
import PropTypes from "prop-types"
import { compose, pure } from "recompose"

import EditVideoForm, { validationSchema } from "./EditVideoForm"

import Modal from "base_components/Modal"
import form from "hoc/form"
import Loading from "base_components/Loading"
import withFormValidation from "hoc/withFormValidation"

import { Header, Footer } from "./components"

const EditVideoModal = ({
  isOpen,
  isSubmitting,
  fields,
  onChange,
  onClose
}) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    header={<Header title="Edit video" />}
    body={
      isSubmitting ? (
        <Loading />
      ) : (
        <EditVideoForm fields={fields} onChange={onChange} />
      )
    }
    footer={
      <Footer
        isSubmitting={isSubmitting}
        onSubmit={() => {}}
        onDelete={() => {}}
      />
    }
  />
)

EditVideoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default compose(
  form({
    file: {},
    title: "Test file title"
  }),
  withFormValidation({ validationSchema }),
  pure
)(EditVideoModal)
