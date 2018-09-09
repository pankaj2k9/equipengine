import React from "react"
import PropTypes from "prop-types"
import { compose, pure } from "recompose"
//
import EntityModal from "base_components/EntityModal"
import form from "hoc/form"
import GroupForm, { validationSchema } from "../GroupForm"
import Loading from "base_components/Loading"
import withFormValidation from "hoc/withFormValidation"

const CreateGroupModal = ({
  isOpen,
  isSubmitting,
  fields,
  onChange,
  onClose,
  handleSubmit
}) => (
  <EntityModal
    title="Create new group"
    isOpen={isOpen}
    onClose={onClose}
    isSubmitting={isSubmitting}
    onSubmit={handleSubmit}
  >
    {isSubmitting ? (
      <Loading />
    ) : (
      <GroupForm fields={fields} onChange={onChange} />
    )}
  </EntityModal>
)

CreateGroupModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default compose(
  form({
    title: "",
    userLimit: 10,
    enabled: true,
    noticeboardEnabled: true,
    studentCanComment: true,
    studentCanPost: true
  }),
  withFormValidation({ validationSchema }),
  pure
)(CreateGroupModal)
