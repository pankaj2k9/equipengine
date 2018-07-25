import React from "react"
import PropTypes from "prop-types"
import { compose, pure, withHandlers } from "recompose"
import { toastr } from "react-redux-toastr"
//
import CreateEntityModal from "base_components/CreateEntityModal"
import form from "hoc/form"
import GroupForm, { validationSchema } from "../GroupForm"
import Loading from "base_components/Loading"
import { validate } from "utils/formFunctions"

const CreateGroupModal = ({
  isOpen,
  isSubmitting,
  fields,
  onChange,
  onClose,
  handleSubmit
}) => (
  <CreateEntityModal
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
  </CreateEntityModal>
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
  withHandlers({
    handleSubmit: ({ fields, onSubmit }) => () => {
      // validate group form
      const validationResult = validate(fields, validationSchema)

      if (validationResult.error) {
        toastr.error(
          "Validation failed",
          validationResult.error.details[0].context.label
        )
      } else {
        onSubmit(fields)
      }
    }
  }),
  pure
)(CreateGroupModal)
