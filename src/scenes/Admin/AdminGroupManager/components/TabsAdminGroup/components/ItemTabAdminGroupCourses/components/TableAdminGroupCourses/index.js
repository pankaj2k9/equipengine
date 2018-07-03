import React from "react"
//
import { compose, pure, withStateHandlers } from "recompose"
//
import Tables, { TableRow, Th } from "base_components/Tables"
import DragDrop from "base_components/DragDrop"
//
import RowsTableAdminGroupCourses from "./components/RowsTableAdminGroupCourses"

const TableHeaderGroupUser = ({ children }) => <Th center>{children}</Th>

const TableAdminGroupCourses = ({ isDragging, onDragStart, onDragEnd }) => (
  <Tables isLayoutFixed={isDragging}>
    <thead>
      <TableRow>
        <Th />
        <TableHeaderGroupUser>Course Name</TableHeaderGroupUser>
        <TableHeaderGroupUser>Date Added</TableHeaderGroupUser>
        <TableHeaderGroupUser>Status</TableHeaderGroupUser>
        <TableHeaderGroupUser />
      </TableRow>
    </thead>
    <DragDrop
      onDragStartListener={onDragStart}
      onDragEndListener={onDragEnd}
      list={[]}
    >
      <RowsTableAdminGroupCourses />
    </DragDrop>
  </Tables>
)

export default compose(
  withStateHandlers(
    {
      isDragging: false
    },
    {
      onDragStart: () => () => ({
        isDragging: true
      }),
      onDragEnd: () => () => ({
        isDragging: false
      })
    }
  ),
  pure
)(TableAdminGroupCourses)
