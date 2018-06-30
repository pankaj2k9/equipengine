import React from "react"
// components
import HeaderAdminCourse from "../../../../../components/HeaderAdminCourse"
import ControlButtonsGroup from "./components/ControlButtonsGroup"

const HeaderTableCourses = () => (
  <HeaderAdminCourse
    ControlButtonsGroup={ControlButtonsGroup}
    searchbarInfo={{
      placeholder: "Search courses"
    }}
  />
)

export default HeaderTableCourses
