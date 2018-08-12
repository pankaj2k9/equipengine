import { withHandlers } from "recompose"
import { validate } from "utils/formFunctions"
import { toastr } from "react-redux-toastr"

/**
 * Add hanldeSubmit method to props with background field validation
 * onSubmit and fields are required to be in component props!
 */
export default ({ validationSchema }) =>
  withHandlers({
    handleSubmit: ({ fields, onSubmit }) => () => {
      const validationResult = validate(fields, validationSchema)

      if (validationResult.error) {
        toastr.error(
          "Validation failed",
          validationResult.error.details[0].context.label
        )
      } else if (onSubmit) {
        onSubmit(fields)
      }
    }
  })
