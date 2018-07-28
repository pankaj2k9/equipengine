import React from "react"
import styled from "styled-components"

import BorderedTitle from "base_components/BorderedTitle"
import CoursesActionBar from "../CoursesActionBar"
import CoursesTable from "../CoursesTable"

const StyledCoursesActionBar = styled(CoursesActionBar)`
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.lightgray};
`

const StyledCoursesTable = styled(CoursesTable)`
  padding: 16px;
`

const AdminCoursesPage = () => (
  <div>
    <BorderedTitle title="Course Creator" />
    <StyledCoursesActionBar />
    <StyledCoursesTable />
  </div>
)

export default AdminCoursesPage
