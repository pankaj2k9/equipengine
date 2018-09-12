import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { compose, pure, withHandlers } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"
import { toastr } from "react-redux-toastr"
// component
import features from "features"
import modal from "hoc/modal"
import CourseBackground from "../CourseBackground"
import { fetchCourse } from "../thunks"
import { selectors } from "../selectors"
import Loading from "base_components/Loading"
import CourseTutorials from "../CourseTutorials"

class Course extends Component {
  componentDidMount() {
    const { courseId } = this.props.match.params
    this.props.fetchCourse({ courseId })
  }

  render() {
    const {
      course,
      isFetchingCourse,
      handleCreateCourse,
      onClose,
      onOpen,
      isOpen
    } = this.props

    if (isFetchingCourse) {
      return <Loading />
    }

    return (
      <div>
        <CourseBackground
          course={course}
          onSubmit={handleCreateCourse}
          onClose={onClose}
          onOpen={onOpen}
          isOpen={isOpen}
        />
        <CourseTutorials />
      </div>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    course: selectors.selectCourse(),
    isFetchingCourse: selectors.selectIsFetchingCourse(),
    isSavingCourse: features.adminCourses.selectors.selectIsSavingCourse()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchCourse,
      updateCourse: features.adminCourses.actions.updateCourse
    },
    dispatch
  )

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  withRouter,
  modal,
  withHandlers({
    handleCreateCourse: ({
      updateCourse,
      onClose,
      match: { params } = {}
    }) => fields => {
      updateCourse(params.courseId, fields).then(action => {
        onClose()
        if (action.type === features.adminCourses.types.UPDATE_COURSE_SUCCESS) {
          toastr.success(
            "Success",
            `Course "${fields.title}" is succesffully updated`
          )
        } else {
          toastr.error("Error", `Failed to update course "${fields.title}"`)
        }
      })
    }
  }),
  pure
)(Course)
