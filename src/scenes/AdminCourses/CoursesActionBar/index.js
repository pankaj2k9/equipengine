import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import debounce from "lodash.debounce"

import { fetchCourses } from "../thunks"
import SearchActionBar from "base_components/SearchActionBar"

const CoursesActionBar = ({ className, fetchCourses }) => (
  <div className={className}>
    <SearchActionBar
      onSearch={debounce(({ term }) => fetchCourses({ ...term }), 500)}
    />
  </div>
)

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchCourses
    },
    dispatch
  )

export default connect(
  null,
  mapDispatch
)(CoursesActionBar)
