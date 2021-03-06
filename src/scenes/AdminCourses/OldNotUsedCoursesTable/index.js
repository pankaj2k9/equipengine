import React from "react"
import { bindActionCreators } from "redux"
import { compose, lifecycle, pure, withHandlers } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"

import { fetchCourses } from "../thunks"
import { selectors } from "../ducks"
import Loading from "base_components/Loading"
import Table, {
  DateCellFormatter,
  DetailsButtonCellFormatter,
  SubtitledTextCellFormatter,
  UserCountCellFormatter
} from "base_components/Table"

const TITLE_COLUMN = "title"
const DATE_COLUMN = "date_added"
const ACTIVE_USERS_COLUMN = "active_users_ids"
const LESSONS_COUNT_COLUMN = "lessons_count"
const DETAILS_COLUMN = "details"

const columns = [
  {
    name: TITLE_COLUMN,
    title: "Name",
    width: "40%",
    getCellValue: row => {
      const { title, description } = row[TITLE_COLUMN]
      return <SubtitledTextCellFormatter title={title} subtitle={description} />
    }
  },
  {
    name: DATE_COLUMN,
    title: "Date added",
    defaultSorting: "asc",
    align: "center",
    width: "15%",
    getCellValue: row => <DateCellFormatter date={new Date(row[DATE_COLUMN])} />
  },
  {
    name: ACTIVE_USERS_COLUMN,
    title: "Active users",
    align: "center",
    width: "15%",
    getCellValue: row => (
      <UserCountCellFormatter count={row[ACTIVE_USERS_COLUMN]} />
    )
  },
  {
    name: LESSONS_COUNT_COLUMN,
    title: "Lessons",
    align: "center",
    width: "15%"
  },
  {
    name: DETAILS_COLUMN,
    align: "right",
    width: "20%",
    getCellValue: row => (
      <DetailsButtonCellFormatter onClick={row[DETAILS_COLUMN]} />
    )
  }
]

const courseToRow = (course, onCourseClick) => ({
  [TITLE_COLUMN]: course,
  [DATE_COLUMN]: course.created_at,
  [ACTIVE_USERS_COLUMN]:
    course.active_user_ids && course.active_user_ids.length,
  [LESSONS_COUNT_COLUMN]: course.lessons_count,
  [DETAILS_COLUMN]: () => onCourseClick(course)
})

const CoursesTable = ({
  className,
  courses,
  isFetchingCourses,
  handleCourseClick
}) => (
  <div className={className}>
    {isFetchingCourses ? (
      <Loading />
    ) : (
      <Table
        columns={columns}
        rowFontSize="16px"
        rows={courses.map(course => courseToRow(course, handleCourseClick))}
      />
    )}
  </div>
)

const mapState = () =>
  createStructuredSelector({
    courses: selectors.selectCourses(),
    isFetchingCourses: selectors.selectIsFetchingCourses(),
    searchTerm: selectors.selectSearchTerm()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchCourses
    },
    dispatch
  )

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  lifecycle({
    componentDidMount() {
      const { courses, searchTerm } = this.props
      if (!courses || courses.length === 0 || searchTerm) {
        this.props.fetchCourses({})
      }
    }
  }),
  withRouter,
  withHandlers({
    handleCourseClick: ({ history }) => course =>
      history.push(`/secure/admin/course-creator/courses/${course.id}`)
  }),
  pure
)(CoursesTable)
