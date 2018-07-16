import React from "react"
import subscribeToCourses from "./hoc/subscribeToCourses"
import FilterableTableCourse from "./FilterableTableCourse"

const TeacherControls = ({ courses }) => (
  <FilterableTableCourse courses={courses} />
)

export default subscribeToCourses(TeacherControls)
