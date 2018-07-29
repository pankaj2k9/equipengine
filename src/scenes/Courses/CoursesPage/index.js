import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { compose } from "recompose"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"

import Breadcrumbs from "base_components/Breadcrumbs"
import features from "features"
import Loading from "base_components/Loading"
import ListCourses from "../ListCourses"
import { fetchCourses } from "../thunks"
import { selectors } from "../ducks"

class CoursesPage extends Component {
  componentDidMount() {
    this.props.fetchCourses({
      groupId: this.props.match.params.groupId,
      studentId: this.props.isStudent && this.props.userId
    })
  }

  render() {
    const { match, courses, isFetchingCourses } = this.props

    return (
      <div>
        <Breadcrumbs
          items={[
            {
              to: match.url,
              label: "Courses"
            }
          ]}
        />
        {isFetchingCourses ? (
          <Loading />
        ) : (
          <ListCourses courses={courses} match={match} />
        )}
      </div>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    courses: selectors.selectCourses(),
    isFetchingCourses: selectors.selectIsFetchingCourses(),
    userId: features.login.selectors.selectCurrentUserId(),
    isStudent: features.login.selectors.selectIsStudent()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchCourses
    },
    dispatch
  )

export default compose(
  withRouter,
  comp =>
    connect(
      mapState,
      mapDispatch
    )(comp)
)(CoursesPage)
