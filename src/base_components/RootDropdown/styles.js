import React from "react"
import css from "utils/css"
import Select from "react-select"

const SelectWrapper = props => <Select {...props} />

/**
 * -------------------------------------
 * Styles for Select
 * -------------------------------------
 */
export default css`
  .Select-control {
    border-color: #dddddd;
    height: 40px;
  }
`(SelectWrapper)
