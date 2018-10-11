import React, { Component, Fragment } from "react"
import { IconButton } from "base_components/RootButton"
import IconSettings from "react-icons/lib/fa/cog"
// components
import GroupCourseSettingsModal from "global/GroupCourseSettingsModal"
import modal from "hoc/modal"

class SettingsButtonCellFormatter extends Component {
  render() {
    const {
      course,
      groupCourseSetting,
      onOpen,
      onClose,
      isOpen,
      onSubmit
    } = this.props

    return (
      <Fragment>
        <IconButton onClick={onOpen} className="group-course-setting">
          <IconSettings />
        </IconButton>
        <GroupCourseSettingsModal
          title={`Group settings for ${course.title}`}
          submitButtonTitle="Update"
          isOpen={isOpen}
          onClose={onClose}
          course={course}
          groupCourseSetting={groupCourseSetting}
          onSubmit={onSubmit}
        />
      </Fragment>
    )
  }
}

export default modal(SettingsButtonCellFormatter)
