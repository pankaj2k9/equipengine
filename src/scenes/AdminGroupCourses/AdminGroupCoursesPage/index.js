import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { compose, withState } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"

import features from "features"
import Loading from "base_components/Loading"
import GroupCoursesTable from "../GroupCoursesTable"
import GroupCoursesActionBar from "../GroupCoursesActionBar"

class AdminGroupCoursesPage extends Component {
  componentDidMount() {
    // Fetch all courses for autocomplete
    const { courses, searchTerm } = this.props
    if (!courses || courses.length === 0 || searchTerm) {
      this.props.fetchCourses({})
    }
    // Fetch group courses
    const { groupId, groupCourses } = this.props
    if (!groupId) {
      return
    }
    if (
      !groupCourses ||
      groupCourses.length === 0 ||
      !Array.isArray(groupCourses[0].group_ids) ||
      !groupCourses[0].group_ids.includes(groupId)
    ) {
      this.props.fetchGroupCourses({ groupId })
    }
  }

  handleCourseClick = course =>
    this.props.history.push(`/secure/admin/courses/${course.id}`)

  handleSearchCourse = term => this.props.fetchCourses({ term })
  handleAddCoursesToGroup = courseIds =>
    this.props.addCoursesToGroup({
      courseIds,
      groupId: this.props.groupId
    })

  render() {
    const {
      className,
      groupCourses,
      isFetchingGroupCourses,
      courses,
      isFetchingCourses,
      searchTerm,
      isAddingCourseToGroup
    } = this.props

    return (
      <div className={className}>
        {isFetchingGroupCourses || isAddingCourseToGroup ? (
          <Loading />
        ) : (
          <div>
            <GroupCoursesActionBar
              isFetchingCourses={isFetchingCourses}
              courses={courses}
              searchTerm={searchTerm}
              onAddCourses={this.handleAddCoursesToGroup}
              onSearchCourse={this.handleSearchCourse}
            />
            <GroupCoursesTable
              courses={groupCourses}
              onCourseClick={this.handleCourseClick}
            />
          </div>
        )}
      </div>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    courses: features.adminCourses.selectors.selectCourses({
      withoutCurrentGroupCourses: true
    }),
    isFetchingCourses: features.adminCourses.selectors.selectIsFetchingCourses(),
    groupCourses: features.adminCourses.selectors.selectGroupCourses(),
    isFetchingGroupCourses: features.adminCourses.selectors.selectIsFetchingGroupCourses(),
    searchTerm: features.adminCourses.selectors.selectSearchTerm(),
    isAddingCourseToGroup: features.adminCourses.selectors.selectIsAddingCoursesToGroup()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      addCoursesToGroup: features.adminCourses.actions.addCoursesToGroup,
      fetchCourses: features.adminCourses.actions.fetchCourses,
      fetchGroupCourses: features.adminCourses.actions.fetchGroupCourses
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
  withState("groupId", null, ({ location, match }) =>
    // retrieve group id from url if provided
    location.pathname.replace(match.url, "").replace("/", "")
  )
)(AdminGroupCoursesPage)
