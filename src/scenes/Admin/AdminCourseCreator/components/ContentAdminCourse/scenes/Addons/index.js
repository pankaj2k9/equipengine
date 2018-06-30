import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
// components
import ContainerAdminCourse from "../components/ContainerAdminCourse"
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import SearchbarAddons from "./components/SearchbarAddons"
import TabsCoursePackages from "./components/TabsCoursePackages"

const ContainerAddons = styled(ContainerAdminCourse)`
  display: flex;
  flex-direction: column;
`

const Addons = ({ match }) => (
  <ContainerAddons>
    <BreadcrumbsItem to={match.url}>Addons</BreadcrumbsItem>
    <SearchbarAddons />
    <TabsCoursePackages />
  </ContainerAddons>
)

Addons.propTypes = {
  match: PropTypes.object.isRequired
}

export default Addons
