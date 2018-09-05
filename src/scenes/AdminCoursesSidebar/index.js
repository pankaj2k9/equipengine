import React, { Fragment } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import styled from "styled-components"
import { withRouter } from "react-router-dom"
import { createStructuredSelector } from "reselect"
import { compose, pure, withHandlers } from "recompose"
import { toastr } from "react-redux-toastr"

import features from "features"
import ListLinkItem from "./components/ListLinkItem"
import iconNewCourse from "./new-course.svg"
import iconCourseLibrary from "./course-library.svg"
import iconAddOns from "./add-ons.svg"
import iconVideos from "./video.svg"

import CourseSettingsModal from "global/CourseSettingsModal"

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

const SidebarAdminCourse = ({
  isSavingCourse,
  isOpen: isOpenCreateCourseModal,
  onOpen: onOpenCreateCourseModal,
  onClose: onCloseCreateCourseModal,
  handleCreateCourse
}) => (
  <Fragment>
    <ListLink>
      <ListLinkItemExtend
        onClick={onOpenCreateCourseModal}
        icon={iconNewCourse}
        url={`/secure/admin/course-creator/new-course`}
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
    <CourseSettingsModal
      isOpen={isOpenCreateCourseModal}
      isSubmitting={isSavingCourse}
      onClose={onCloseCreateCourseModal}
      onSubmit={handleCreateCourse}
    />
  </Fragment>
)

SidebarAdminCourse.propTypes = {
  onOpen: PropTypes.func.isRequired
}

const mapState = () =>
  createStructuredSelector({
    isSavingCourse: features.adminCourses.selectors.selectIsSavingCourse()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      createCourse: features.adminCourses.actions.createCourse
    },
    dispatch
  )

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  modal,
  withRouter,
  withHandlers({
    handleCreateCourse: ({ createCourse, history, onClose }) => fields => {
      createCourse(fields).then(action => {
        onClose()
        if (action.type === features.adminCourses.types.CREATE_COURSE_SUCCESS) {
          history.push(
            `/secure/admin/course-creator/courses/${action.payload.course.id}`
          )
          toastr.success(
            "Success",
            `New course "${fields.title}" is succesffully created`
          )
        } else {
          toastr.error("Error", `Failed to create course "${fields.title}"`)
        }
      })
    }
  }),
  pure
)(SidebarAdminCourse)
