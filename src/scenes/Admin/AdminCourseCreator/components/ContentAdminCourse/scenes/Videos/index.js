import React from "react"
import PropTypes from "prop-types"
//
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import HeaderAdminCourse from "../components/HeaderAdminCourse"
import ContainerAdminCourse from "../components/ContainerAdminCourse"
import DropdownSortBy from "./components/DropdownSortBy"
import TableVideos from "./components/TableVideos"

const Videos = ({ match }) => (
  <ContainerAdminCourse>
    <BreadcrumbsItem to={match.url}>Videos</BreadcrumbsItem>
    <HeaderAdminCourse
      ControlButtonsGroup={DropdownSortBy}
      searchbarInfo={{
        placeholder: "Search videos"
      }}
    />
    <TableVideos />
  </ContainerAdminCourse>
)

Videos.propTypes = {
  match: PropTypes.object.isRequired
}

export default Videos
