import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { compose, withState } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"

import CourseListItem from "../CourseListItem"
import DragDrop, {
  DroppableList,
  DroppableListItem
} from "base_components/DragDrop"
import features from "features"
import Loading from "base_components/Loading"
import { selectors } from "../selectors"
import { fetchCoursesTutorials } from "../thunks"

class StudentCoursesTab extends Component {
  componentDidMount() {
    const { groupId, selectedUser } = this.props
    this.props
      .fetchCourses({
        groupId,
        studentId: selectedUser.id
      })
      .then(action => {
        if (action.payload && action.payload.courses) {
          // Load all tutorials for all student courses
          this.props.fetchCoursesTutorials({
            groupId,
            courses: action.payload.courses
          })
        }
      })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedUser !== this.props.selectedUser) {
      this.props.fetchCourses({
        groupId: this.props.groupId,
        studentId: this.props.selectedUser.id
      })
    }
  }

  handleChangeStatus = () => {
    // TODO add change enable/disable logic
  }

  handleViewTutorial = ({ id, course_id }) => {
    const { groupId, history } = this.props
    history.push(
      `/secure/groups/${groupId}/courses/${course_id}/tutorials/${id}`
    )
  }

  handleReportTutorial = () => {
    const { groupId, history } = this.props
    history.push(`/secure/groups/${groupId}/report`)
  }

  render() {
    const {
      courses,
      isFetchingCourses,
      isFetchingCoursesTutorials,
      selectedUser
    } = this.props

    if (isFetchingCourses || isFetchingCoursesTutorials) {
      return <Loading />
    }

    return (
      <DragDrop list={courses}>
        <DroppableList list={courses} droppableId="droppable-01" type="COURSES">
          {list =>
            list.length === 0
              ? "Student has no courses"
              : list.map(course => (
                  <DroppableListItem
                    draggableId={`course-${course.id}`}
                    type="COURSES"
                    index={0}
                    key={course.id}
                  >
                    <CourseListItem
                      course={course}
                      enabled={course.active_user_ids.includes(selectedUser.id)}
                      onChangeStatus={this.handleChangeStatus}
                      onViewTutorial={this.handleViewTutorial}
                      onReportTutorial={this.handleReportTutorial}
                    />
                  </DroppableListItem>
                ))
          }
        </DroppableList>
      </DragDrop>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    courses: features.courses.selectors.selectCourses(),
    isFetchingCourses: features.courses.selectors.selectIsFetchingCourses(),
    selectedUser: selectors.selectSelectedUser(),
    isFetchingCoursesTutorials: selectors.selectIsFetchingCoursesTutorials()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchCourses: features.courses.actions.fetchCourses,
      fetchCoursesTutorials
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
  withState("groupId", null, props => props.match.params.groupId)
)(StudentCoursesTab)
