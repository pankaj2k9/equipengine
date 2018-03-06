import React from 'react'
import PropTypes from 'prop-types'
// components
import ContainerFlex from 'base_components/ContainerFlex'
import SidebarAdminCourse from './components/SidebarAdminCourse'
import ContentAdminCourse from './components/ContentAdminCourse'
import withModal from './hoc/withModal'

const AdminCourseCreator = ({ match, handleShow, handleClose, isOpen }) => (
  <ContainerFlex>
    <SidebarAdminCourse handleShow={handleShow} />
    <ContentAdminCourse
      handleClose={handleClose}
      isOpen={isOpen}
      match={match}
    />
  </ContainerFlex>
)

AdminCourseCreator.propTypes = {
  match: PropTypes.object.isRequired,
  handleShow: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default withModal(AdminCourseCreator)
