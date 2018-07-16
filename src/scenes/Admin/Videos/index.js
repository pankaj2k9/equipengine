import React from "react"
import PropTypes from "prop-types"
//
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic"
import HeaderAdminCourse from "scenes/Admin/CourseCreator/HeaderAdminCourse"
import ContainerAdminCourse from "scenes/Admin/CourseCreator/ContainerAdminCourse"
import TableVideos from "./components/TableVideos"
import ContentAdminCourse from "scenes/Admin/CourseCreator/ContentAdminCourse"

const Videos = ({ match }) => (
  <ContentAdminCourse>
    <ContainerAdminCourse>
      <BreadcrumbsItem to={match.url}>Videos</BreadcrumbsItem>
      <HeaderAdminCourse
        searchbarInfo={{
          placeholder: "Search videos"
        }}
      />
      <TableVideos />
    </ContainerAdminCourse>
  </ContentAdminCourse>
)

Videos.propTypes = {
  match: PropTypes.object.isRequired
}

export default Videos
