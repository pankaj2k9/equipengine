import React from "react"

import StatusCircle from "base_components/StatusCircle"
import Table, {
  DateCellFormatter,
  DetailsButtonCellFormatter
} from "base_components/Table"

const TITLE_COLUMN = "title"
const DATE_COLUMN = "date_added"
const STATUS_COLUMN = "status"
const DETAILS_COLUMN = "details"

const columns = [
  {
    name: TITLE_COLUMN,
    title: "Course name",
    width: "40%"
  },
  {
    name: DATE_COLUMN,
    title: "Date added",
    width: "15%",
    getCellValue: row => <DateCellFormatter date={new Date(row[DATE_COLUMN])} />
  },
  {
    name: STATUS_COLUMN,
    title: "Status",
    align: "center",
    width: "15%",
    getCellValue: row => <StatusCircle disabled={!row[STATUS_COLUMN]} />
  },
  {
    name: DETAILS_COLUMN,
    align: "right",
    width: "30%",
    getCellValue: row => (
      <DetailsButtonCellFormatter onClick={row[DETAILS_COLUMN]} />
    )
  }
]

const courseToRow = (course, onCourseClick) => ({
  [TITLE_COLUMN]: course.title,
  [DATE_COLUMN]: course.created_at,
  [STATUS_COLUMN]: true,
  [DETAILS_COLUMN]: () => onCourseClick(course)
})

const CoursesTable = ({ className, courses, onCourseClick }) => (
  <Table
    className={className}
    columns={columns}
    rowFontSize="16px"
    rows={
      Array.isArray(courses)
        ? courses.map(course => courseToRow(course, onCourseClick))
        : []
    }
  />
)

export default CoursesTable