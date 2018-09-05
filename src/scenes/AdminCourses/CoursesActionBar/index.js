import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"

import { fetchCourses } from "../thunks"
import SearchActionBar from "base_components/SearchActionBar"

const CoursesActionBar = ({ className, fetchCourses }) => (
  <div className={className}>
    <SearchActionBar onSearch={term => fetchCourses({ ...term })} />
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
