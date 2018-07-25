import { createRef } from "react"
import { withStateHandlers } from "recompose"
import { updateFieldValue } from "utils/formFunctions"

const form = (fields = {}, refs = []) => WrappedComponent => {
  let filledRefs = {}
  refs.forEach(refName => (filledRefs[refName] = createRef()))

  return withStateHandlers(
    {
      fields,
      refs: filledRefs
    },
    {
      onChange: ({ fields }, ...rest) => (value, selector) => ({
        ...rest,
        fields: updateFieldValue(value, selector, fields)
      })
    }
  )(WrappedComponent)
}

export default form
