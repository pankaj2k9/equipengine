import React, { Fragment, Component } from "react"
import joi from "joi"
// components
import GroupCourseRules from "./GroupCourseRules"
import GroupCourseLessonPermission from "./GroupCourseLessonPermission"
import GroupCourseFeatures from "./GroupCourseFeatures"
import GroupCourseControls from "./GroupCourseControls"

export const validationSchema = joi.object().keys({})

const GroupCourseSettingsForm = ({
  courses,
  course,
  groupCourseSetting,
  isFetchingCourses,
  fields,
  onChange,
  handleDropdownChange,
  handleCourseStatusChange,
  handleDeleteCourse
}) => {
  const {
    hasCourseDependency,
    preCourseId,
    canLessonCompletedByStudent,
    canLessonCompletedByTeacher,
    isFilesEnabled,
    isDiscussionEnabled,
    isStudentContentEnabled,
    courseStatus
  } = fields

  return (
    <Fragment>
      <GroupCourseRules
        courses={courses}
        course={course}
        isFetchingCourses={isFetchingCourses}
        groupCourseSetting={groupCourseSetting}
        hasCourseDependency={hasCourseDependency}
        preCourseId={preCourseId}
        onChange={onChange}
        handleDropdownChange={handleDropdownChange}
      />
      <GroupCourseLessonPermission
        canLessonCompletedByStudent={canLessonCompletedByStudent}
        canLessonCompletedByTeacher={canLessonCompletedByTeacher}
        onChange={onChange}
      />
      <GroupCourseFeatures
        isFilesEnabled={isFilesEnabled}
        isDiscussionEnabled={isDiscussionEnabled}
        isStudentContentEnabled={isStudentContentEnabled}
        onChange={onChange}
      />
      <GroupCourseControls
        course={course}
        courseStatus={courseStatus}
        handleCourseStatusChange={handleCourseStatusChange}
        handleDeleteCourse={handleDeleteCourse}
      />
    </Fragment>
  )
}

export default GroupCourseSettingsForm
