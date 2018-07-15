import React from "react"
// components
import HeaderAdminCourse from "../../../../../components/HeaderAdminCourse"
import ControlButtonsGroup from "./components/ControlButtonsGroup"

import form from "hoc/form"

const HeaderTableCourses = ({ fields: { term }, onChange }) => (
  <HeaderAdminCourse
    ControlButtonsGroup={ControlButtonsGroup}
    searchbarInfo={{
      value: term,
      onChange: e => onChange(e.target.value, "term"),
      placeholder: "Search Courses"
    }}
  />
)

export default form({ term: "" })(HeaderTableCourses)
