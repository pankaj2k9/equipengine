import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { compose, lifecycle } from "recompose"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"

import BodyCourse from "../BodyCourse"
import Breadcrumbs from "base_components/Breadcrumbs"
import Error from "base_components/Error"
import features from "features"
import HeaderCourse from "../HeaderCourse"
import Loading from "base_components/Loading"

const Course = ({ match, courses, isFetchingCourses }) => {
  // TODO think if we should load one or all the courses for single course view
  const { courseId, groupId } = match.params
  const course = courses.find(course => course.id.toString() === courseId)

  if (isFetchingCourses) {
    return <Loading />
  }

  if (!course) {
    return <Error>Course not found</Error>
  }

  return (
    <div>
      {/* Breadcrumbs with links to courses */}
      <Breadcrumbs
        items={[
          {
            to: `/secure/groups/${groupId}/courses`,
            label: "Courses"
          },
          {
            to: match.url,
            label: course.title
          }
        ]}
      />

      {/* Image with name and completed circle */}
      <HeaderCourse course={course} />

      {/* Tutorials, files and discussions */}
      <BodyCourse course={course} />
    </div>
  )
}

const mapState = () =>
  createStructuredSelector({
    courses: features.courses.selectors.selectCourses(),
    isFetchingCourses: features.courses.selectors.selectIsFetchingCourses(),
    userId: features.login.selectors.selectCurrentUserId(),
    isStudent: features.login.selectors.selectIsStudent()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchCourses: features.courses.actions.fetchCourses
    },
    dispatch
  )

export default compose(
  comp =>
    connect(
      mapState,
      mapDispatch
    )(comp),
  withRouter,
  lifecycle({
    componentDidMount() {
      this.props.fetchCourses({
        groupId: this.props.match.params.groupId,
        studentId: this.props.isStudent && this.props.userId
      })
    }
  })
)(Course)
