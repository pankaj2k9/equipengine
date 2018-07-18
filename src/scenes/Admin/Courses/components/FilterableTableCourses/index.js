import React from "react"
import PropTypes from "prop-types"

import HeaderTableCourses from "./components/HeaderTableCourses"
import TableCourses from "./components/TableCourses"

const FilterableTableCourses = ({ match }) => (
  <div>
    <HeaderTableCourses />
    <TableCourses match={match} />
  </div>
)

FilterableTableCourses.propTypes = {
  match: PropTypes.object.isRequired
}

export default FilterableTableCourses
