import React from "react"
import PropTypes from "prop-types"

const TableRow = ({ children, className }) => {
  return <tr className={`Tables__row ${className}`}>{children}</tr>
}

TableRow.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}

export default TableRow
