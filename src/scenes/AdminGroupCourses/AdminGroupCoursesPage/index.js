import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { compose, withState } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"
// components
import features from "features"
import { selectors } from "../selectors"
import {
  addCoursesToGroup,
  fetchGroupCourses,
  fetchGroupCourseSettings,
  updateGroupCourseSettings
} from "../thunks"
import Loading from "base_components/Loading"
import GroupCoursesList from "../GroupCourseList"
import GroupCoursesActionBar from "../GroupCoursesActionBar"

class AdminGroupCoursesPage extends Component {
  componentDidMount() {
    // Fetch current group courses
    const { groupId, groupCourses } = this.props
    if (
      groupId &&
      (!groupCourses ||
        groupCourses.length === 0 ||
        !Array.isArray(groupCourses[0].group_ids) ||
        !groupCourses[0].group_ids.includes(groupId))
    ) {
      this.props.fetchGroupCourses({ groupId, current_page: 1 })
      this.props.fetchGroupCourseSettings({ groupId })
    }

    // Fetch all courses for autocomplete
    const { nonCurrentGroupCourses, searchTerm } = this.props
    if (
      !nonCurrentGroupCourses ||
      nonCurrentGroupCourses.length === 0 ||
      searchTerm
    ) {
      this.props.fetchCourses({})
    }
  }

  handleUpdateGroupCourseSettings = fields => {
    console.log("handleCourseSettingsClick")
    this.props.updateGroupCourseSettings(fields)
  }

  handleCourseClick = course =>
    this.props.history.push(`/secure/admin/course-creator/courses/${course.id}`)

  handleSearchCourse = term => this.props.fetchCourses({ term })
  handleAddCoursesToGroup = courseIds => {
    const { nonCurrentGroupCourses } = this.props
    const mappedCourses = courseIds.map(courseId =>
      nonCurrentGroupCourses.find(
        nonCurrentGroupCourse => nonCurrentGroupCourse.id === courseId
      )
    )
    this.props.addCoursesToGroup({
      courses: mappedCourses,
      groupId: this.props.groupId
    })
  }

  render() {
    const {
      className,
      groupCourses,
      isFetchingGroupCourses,
      nonCurrentGroupCourses,
      isFetchingCourses,
      searchTerm,
      isAddingCourseToGroup,
      groupCourseSettings,
      isFetchingGroupCourseSettings,
      isUpdatingGroupCourseSettings
    } = this.props

    return (
      <div className={className}>
        {isFetchingGroupCourses ||
        isAddingCourseToGroup ||
        isFetchingGroupCourseSettings ||
        isUpdatingGroupCourseSettings ? (
          <Loading />
        ) : (
          <div>
            <GroupCoursesActionBar
              isFetchingCourses={isFetchingCourses}
              courses={nonCurrentGroupCourses}
              searchTerm={searchTerm}
              onAddCourses={this.handleAddCoursesToGroup}
              onSearchCourse={this.handleSearchCourse}
            />
            <GroupCoursesList
              courses={groupCourses}
              groupCourseSettings={groupCourseSettings}
              onUpdateGroupCourseSettings={this.handleUpdateGroupCourseSettings}
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
    // action bar selectors
    nonCurrentGroupCourses: selectors.selectNonCurrentGroupCourses(),
    isFetchingCourses: features.adminCourses.selectors.selectIsFetchingCourses(),
    searchTerm: features.adminCourses.selectors.selectSearchTerm(),
    // table and action bar selectors
    groupCourses: selectors.selectGroupCourses(),
    isFetchingGroupCourses: selectors.selectIsFetchingGroupCourses(),
    isAddingCourseToGroup: selectors.selectIsAddingCoursesToGroup(),
    groupCourseSettings: selectors.selectGroupCourseSettings(),
    isFetchingGroupCourseSettings: selectors.selectIsFetchingGroupCourseSettings(),
    isUpdatingGroupCourseSettings: selectors.selectIsUpdatingGroupCourseSettings()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      addCoursesToGroup,
      fetchGroupCourses,
      fetchGroupCourseSettings,
      updateGroupCourseSettings,
      fetchCourses: features.adminCourses.actions.fetchCourses
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
