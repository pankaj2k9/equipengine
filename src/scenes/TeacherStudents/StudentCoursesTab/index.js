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

const tutorials = [
  {
    id: 6,
    title: "Fisher-Batz",
    description: "cultivate e-business channels",
    status: "active",
    user_id: 585,
    course_id: 16,
    created_at: "April 22, 2018 09:15",
    updated_at: "April 22, 2018 15:15",
    course_settings: {
      id: 77,
      course_id: 155,
      group_id: 46,
      precourse_id: 0,
      complete_lesson_can: "all",
      reports_enabled: true,
      files_enabled: true,
      discussing_enabled: true,
      student_content_enabled: true,
      status: "active",
      created_at: "April 22, 2018 09:15",
      updated_at: "April 22, 2018 09:15"
    },
    tasks: []
  }
]

class StudentCoursesTab extends Component {
  componentDidMount() {
    this.props.fetchCourses({
      groupId: this.props.groupId,
      studentId: this.props.selectedUser.id
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

  render() {
    const { courses, isFetchingCourses, selectedUser } = this.props

    if (isFetchingCourses) {
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
                      tutorials={tutorials}
                      enabled={course.active_user_ids.includes(selectedUser.id)}
                      onChangeStatus={this.handleChangeStatus}
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
    selectedUser: selectors.selectSelectedUser()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchCourses: features.courses.actions.fetchCourses
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
