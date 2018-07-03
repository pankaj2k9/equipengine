import React from "react"
import PropTypes from "prop-types"

import subscribingOnCourses from "./hoc"
import ListCourses from "./components/ListCourses"

const Courses = ({ courses, match }) => {
  return <ListCourses courses={courses} match={match} />
}

Courses.propTypes = {
  courses: PropTypes.array
}

export default subscribingOnCourses(Courses)
