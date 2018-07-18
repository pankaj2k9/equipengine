import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
// components
import ContainerAdminCourse from "scenes/Admin/CourseCreator/ContainerAdminCourse"
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import SearchbarAddons from "./components/SearchbarAddons"
import TabsCoursePackages from "./components/TabsCoursePackages"
import ContentAdminCourse from "scenes/Admin/CourseCreator/ContentAdminCourse"

const ContainerAddons = styled(ContainerAdminCourse)`
  display: flex;
  flex-direction: column;
`

const Addons = ({ match }) => (
  <ContentAdminCourse>
    <ContainerAddons>
      <BreadcrumbsItem to={match.url}>Add-ons</BreadcrumbsItem>
      <SearchbarAddons />
      <TabsCoursePackages />
    </ContainerAddons>
  </ContentAdminCourse>
)

Addons.propTypes = {
  match: PropTypes.object.isRequired
}

export default Addons
