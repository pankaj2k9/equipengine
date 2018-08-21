import joi from "joi"

export const updateFieldValue = (e, selector, fields) => {
  if (e === null || e === undefined) {
    return { ...fields }
  }

  if (e.preventDefault) {
    e.preventDefault()
  }

  if (!e.target) {
    return {
      ...fields,
      [selector]: e
    }
  }

  return {
    ...fields,
    [selector]: e.target.type === "checkbox" ? e.target.checked : e.target.value
  }
}

export const validate = (fields, schema) =>
  joi.validate(fields, schema, {
    allowUnknown: true
  })

export const openFileChooser = (e, ref) => {
  if (e && e.preventDefault) {
    e.preventDefault()
  }

  if (ref) {
    // In case of React.createRef() usage
    if (ref.current) {
      return ref.current.open()
    }

    ref.open()
  }
}

export const getDropdownValue = selectedOption => {
  if (!selectedOption) return null
  return selectedOption.value
}
