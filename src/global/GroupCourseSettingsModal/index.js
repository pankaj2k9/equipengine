import React, { Component } from "react"
import PropTypes from "prop-types"
import { compose, pure } from "recompose"
import { createStructuredSelector } from "reselect"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
// components
import features from "features"
import GroupCourseSettingsForm from "../GroupCourseSettingsForm"
import EntityModal from "base_components/EntityModal"
import Loading from "base_components/Loading"
import {
  ACTIVE_COURSE_IN_GROUP_STATUS,
  PAUSE_COURSE_IN_GROUP_STATUS
} from "services/constants"
import { extractGroupId } from "utils/urlUrils"
import { updateFieldValue } from "utils/formFunctions"

class GroupCourseSettingsModal extends Component {
  state = {
    fields: {
      hasCourseDependency: this.props.groupCourseSetting.precourse_id
        ? true
        : false,
      preCourseId: this.props.groupCourseSetting.precourse_id
        ? this.props.groupCourseSetting.precourse_id
        : "",
      isFilesEnabled: this.props.groupCourseSetting.files_enabled
        ? this.props.groupCourseSetting.files_enabled
        : false,
      isDiscussionEnabled: this.props.groupCourseSetting.discussing_enabled
        ? this.props.groupCourseSetting.discussing_enabled
        : false,
      isStudentContentEnabled: this.props.groupCourseSetting
        .student_content_enabled
        ? this.props.groupCourseSetting.student_content_enabled
        : false,
      courseStatus:
        this.props.groupCourseSetting.status === ACTIVE_COURSE_IN_GROUP_STATUS
          ? ACTIVE_COURSE_IN_GROUP_STATUS
          : PAUSE_COURSE_IN_GROUP_STATUS
    }
  }

  constructor(props) {
    super(props)
    const list = props.groupCourseSetting.complete_lesson_can.split(",")
    if (list.includes("teacher")) {
      this.state.fields.canLessonCompletedByTeacher = true
    }
    if (list.includes("student")) {
      this.state.fields.canLessonCompletedByStudent = true
    }
  }

  onChange = event => {
    const fields = this.state.fields
    const selector = event.currentTarget.name

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value

    const nextFields = updateFieldValue(value, selector, fields)

    this.setState({
      fields: nextFields
    })
  }

  handleDropdownChange = (value, selector) => {
    const fields = this.state.fields
    const nextFields = updateFieldValue(value, selector, fields)

    this.setState({
      fields: nextFields
    })
  }

  handleCourseStatusChange = (value, selector) => {
    const fields = this.state.fields
    const nextFields = updateFieldValue(value, selector, fields)

    this.setState({
      fields: nextFields
    })
  }

  handleDeleteCourse = () => {
    const {
      deleteGroupCourseSettings,
      groupCourseSetting,
      history,
      location
    } = this.props

    const groupId = extractGroupId(location.pathname)
    history.push(`/secure/admin/groups/${groupId}`)

    deleteGroupCourseSettings({
      groupId,
      id: groupCourseSetting.id
    })
  }

  handleSubmit = () => {
    const fields = {}
    const completeLessonCanList = []
    const groupId = extractGroupId(this.props.location.pathname)
    const id = this.props.groupCourseSetting.id

    fields.groupId = groupId
    fields.id = id
    if (this.state.fields.canLessonCompletedByTeacher) {
      completeLessonCanList.push("teacher")
    }
    if (this.state.fields.canLessonCompletedByStudent) {
      completeLessonCanList.push("student")
    }
    fields.complete_lesson_can = completeLessonCanList.join()
    fields.discussing_enabled = this.state.fields.isDiscussionEnabled
    fields.files_enabled = this.state.fields.isDiscussionEnabled
    if (this.state.fields.hasCourseDependency) {
      fields.precourse_id = this.state.fields.preCourseId
    } else {
      fields.precourse_id = ""
    }
    fields.student_content_enabled = this.state.fields.isDiscussionEnabled
      ? this.state.isStudentContentEnabled
      : false
    fields.status = this.state.fields.courseStatus
    fields.sequence_number = 0

    this.props.onClose()
    this.props.onSubmit(fields)
  }

  render() {
    const {
      isOpen,
      isSubmitting,
      onClose,
      title,
      submitButtonTitle,
      courses,
      course,
      groupCourseSetting
    } = this.props

    return (
      <EntityModal
        title={title || "Group Settings"}
        submitButtonTitle={submitButtonTitle}
        isOpen={isOpen}
        onClose={onClose}
        isSubmitting={isSubmitting}
        onSubmit={this.handleSubmit}
      >
        {isSubmitting ? (
          <Loading />
        ) : (
          <GroupCourseSettingsForm
            fields={this.state.fields}
            courses={courses}
            course={course}
            groupCourseSetting={groupCourseSetting}
            onChange={this.onChange}
            handleDropdownChange={this.handleDropdownChange}
            handleCourseStatusChange={this.handleCourseStatusChange}
            handleDeleteCourse={this.handleDeleteCourse}
          />
        )}
      </EntityModal>
    )
  }
}

GroupCourseSettingsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const mapState = () =>
  createStructuredSelector({
    isFetchingCourses: features.adminCourses.selectors.selectIsFetchingCourses(),
    courses: features.adminCourses.selectors.selectCourses()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      deleteGroupCourseSettings:
        features.adminGroupCourses.actions.deleteGroupCourseSettings
    },
    dispatch
  )

export default compose(
  pure,
  withRouter,
  connect(
    mapState,
    mapDispatch
  )
)(GroupCourseSettingsModal)
