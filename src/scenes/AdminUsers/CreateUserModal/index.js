import React from "react"
import PropTypes from "prop-types"
import { compose, pure, withHandlers } from "recompose"
import { toastr } from "react-redux-toastr"
//
import CreateEntityModal from "base_components/CreateEntityModal"
import form from "hoc/form"
import UserForm, { validationSchema } from "../UserForm"
import Loading from "base_components/Loading"
import { STUDENT_ROLE } from "services/constants"
import { validate } from "utils/formFunctions"

const CreateUserModal = ({
  isOpen,
  isSubmitting,
  fields,
  onChange,
  onClose,
  handleSubmit
}) => (
  <CreateEntityModal
    title="Create new user"
    isOpen={isOpen}
    onClose={onClose}
    isSubmitting={isSubmitting}
    onSubmit={handleSubmit}
  >
    {isSubmitting ? (
      <Loading />
    ) : (
      <UserForm fields={fields} onChange={onChange} />
    )}
  </CreateEntityModal>
)

CreateUserModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default compose(
  form({
    firstName: "",
    lastName: "",
    email: "",
    role: STUDENT_ROLE
  }),
  withHandlers({
    handleSubmit: ({ fields, onSubmit }) => () => {
      // validate user form
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
)(CreateUserModal)
