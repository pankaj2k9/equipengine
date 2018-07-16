import React, { Fragment } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { withRouter } from "react-router-dom"
// components
import ListLinkItem from "./components/ListLinkItem"
//
import iconNewCourse from "./new-course.svg"
import iconCourseLibrary from "./course-library.svg"
import iconAddOns from "./add-ons.svg"
import iconVideos from "./video.svg"

import NewCourseModal from "scenes/Admin/CourseCreator/NewCourseModal"

import modal from "hoc/modal"

const ListLink = styled.ul`
  min-height: 100vh;
  height: 100%;
  width: 91px;
  background-color: #000000;
  position: fixed;
  margin-top: -1px;
  z-index: 1;

  @media screen and (max-width: 767px) {
    width: initial;
  }
`

const ListLinkItemExtend = styled(ListLinkItem)`
  @media screen and (min-width: 768px) {
    img {
      width: 55px;
      height: 51px;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 20px 0;

    img {
      margin: 0 auto;
      display: block;
      width: 37px;
      height: 34px;
    }
  }
`

const SidebarAdminCourse = ({ onOpen, onClose, isOpen }) => (
  <Fragment>
    <ListLink>
      <ListLinkItemExtend
        onClick={onOpen}
        icon={iconNewCourse}
        // url={`/secure/admin/course-creator/new-course`}
      />
      <ListLinkItem
        icon={iconCourseLibrary}
        text="Course Library"
        url={`/secure/admin/course-creator/courses`}
      />
      <ListLinkItem
        icon={iconAddOns}
        text="Add-ons"
        url={`/secure/admin/course-creator/add-ons`}
      />
      <ListLinkItem
        icon={iconVideos}
        text="Videos"
        url={`/secure/admin/course-creator/videos`}
      />
    </ListLink>
    <NewCourseModal handleClose={onClose} isOpen={isOpen} />
  </Fragment>
)

SidebarAdminCourse.propTypes = {
  onOpen: PropTypes.func.isRequired
}

export default modal(SidebarAdminCourse)
