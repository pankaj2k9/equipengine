import React from "react"
import styled from "styled-components"

import CoursesContainer from "scenes/AdminCoursesContainer"
import BorderedTitle from "base_components/BorderedTitle"
import CoursesActionBar from "../CoursesActionBar"
import CoursesList from "../CoursesList"

const StyledCoursesActionBar = styled(CoursesActionBar)`
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.lightgray};
`

const StyledCoursesList = styled(CoursesList)`
  padding: 16px;
`

const AdminCoursesPage = props => {
  return (
    <CoursesContainer>
      <BorderedTitle title="Course Creator" />
      <StyledCoursesActionBar />
      <StyledCoursesList {...props} />
    </CoursesContainer>
  )
}

export default AdminCoursesPage
