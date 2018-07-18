import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Breadcrumbs from "base_components/Breadcrumbs"

import SidebarAdminCourse from "scenes/Admin/CourseCreator/SidebarAdminCourse"

const ContainerContent = styled.div`
  margin-left: 91px;
  width: calc(100% - 91px);

  @media screen and (max-width: 768px) {
    margin-left: 70px;
    width: calc(100% - 70px);
  }
`

const ContentAdminCourse = ({ children }) => (
  <Fragment>
    <SidebarAdminCourse />
    <ContainerContent>
      <Breadcrumbs />
      {children}
    </ContainerContent>
  </Fragment>
)

ContentAdminCourse.propTypes = {
  children: PropTypes.element.isRequired
}

export default ContentAdminCourse
