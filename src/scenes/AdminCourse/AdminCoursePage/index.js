import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { compose } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"
// component
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
    const { course, isFetchingCourse } = this.props

    if (isFetchingCourse) {
      return <Loading />
    }

    return (
      <div>
        <CourseBackground course={course} />
        <CourseTutorials />
      </div>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    course: selectors.selectCourse(),
    isFetchingCourse: selectors.selectIsFetchingCourse()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchCourse
    },
    dispatch
  )

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  withRouter
)(Course)
