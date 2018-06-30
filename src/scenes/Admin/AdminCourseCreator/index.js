import React from "react"
import PropTypes from "prop-types"
// components
import ContainerFlex from "base_components/ContainerFlex"
import SidebarAdminCourse from "./components/SidebarAdminCourse"
import ContentAdminCourse from "./components/ContentAdminCourse"
import modal from "hoc/modal"

const AdminCourseCreator = ({ match, onOpen, onClose, isOpen }) => (
  <ContainerFlex>
    <SidebarAdminCourse onOpen={onOpen} />
    <ContentAdminCourse onClose={onClose} isOpen={isOpen} match={match} />
  </ContainerFlex>
)

AdminCourseCreator.propTypes = {
  match: PropTypes.object.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default modal(AdminCourseCreator)
