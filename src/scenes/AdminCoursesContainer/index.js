import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import SidebarAdminCourse from "scenes/AdminCoursesSidebar"

const ContainerContent = styled.div`
  margin-left: 91px;
  width: calc(100% - 91px);

  @media screen and (max-width: 768px) {
    margin-left: 70px;
    width: calc(100% - 70px);
  }
`

const CoursesContainer = ({ children }) => (
  <Fragment>
    <SidebarAdminCourse />
    <ContainerContent>{children}</ContainerContent>
  </Fragment>
)

CoursesContainer.propTypes = {
  children: PropTypes.element.isRequired
}

export default CoursesContainer
