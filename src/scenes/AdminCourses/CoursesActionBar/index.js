import React from "react"
import { bindActionCreators } from "redux"
import { compose, pure, withHandlers } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { toastr } from "react-redux-toastr"
import { withRouter } from "react-router-dom"

import { createCourse, fetchCourses } from "../thunks"
import CourseSettingsModal from "global/CourseSettingsModal"
import modal from "hoc/modal"
import SearchActionBar from "base_components/SearchActionBar"
import { selectors, types } from "../ducks"

const CoursesActionBar = ({
  className,
  fetchCourses,
  isSavingCourse,
  isOpen: isOpenCreateCourseModal,
  onOpen: onOpenCreateCourseModal,
  onClose: onCloseCreateCourseModal,
  handleCreateCourse
}) => (
  <div className={className}>
    <SearchActionBar
      onCreate={onOpenCreateCourseModal}
      onSearch={term => fetchCourses({ term })}
    />
    <CourseSettingsModal
      isOpen={isOpenCreateCourseModal}
      isSubmitting={isSavingCourse}
      onClose={onCloseCreateCourseModal}
      onSubmit={handleCreateCourse}
    />
  </div>
)

const mapState = () =>
  createStructuredSelector({
    isSavingCourse: selectors.selectIsSavingCourse()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchCourses,
      createCourse
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
        if (action.type === types.CREATE_COURSE_SUCCESS) {
          history.push(`/secure/admin/courses/${action.payload.course.id}`)
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
)(CoursesActionBar)
