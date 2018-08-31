import joi from "joi"

export const updateFieldValue = (e, selector, fields) => {
  // FIXME: below null||undefined check is a major blocker for dropdown clear states. they are expectedly
  // not getting updated. Providing hack fix as not sure the regression possibilites.
  if (selector === "state_id" || selector === "country_id") {
    return {
      ...fields,
      [selector]: e || 0
    }
  }

  if (e === null || e === undefined) {
    return { ...fields }
  }

  if (e.preventDefault) {
    e.preventDefault()
  }

  if (!e.target) {
    let value

    // Moment object
    if (e.isValid && e.isValid()) {
      value = e.format("YYYY-MM-DD")
    } else {
      value = e
    }

    return {
      ...fields,
      [selector]: value
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
