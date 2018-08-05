import React from "react"
import PropTypes from "prop-types"
import { compose, pure } from "recompose"
//
import CreateEntityModal from "base_components/CreateEntityModal"
import form from "hoc/form"
import CreateUserForm, { validationSchema } from "../CreateUserForm"
import Loading from "base_components/Loading"
import { STUDENT_ROLE } from "services/constants"
import withFormValidation from "hoc/withFormValidation"

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
      <CreateUserForm fields={fields} onChange={onChange} />
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
  withFormValidation({ validationSchema }),
  pure
)(CreateUserModal)
