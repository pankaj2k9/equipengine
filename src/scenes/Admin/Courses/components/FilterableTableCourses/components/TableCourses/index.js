import React from "react"
import PropTypes from "prop-types"
//
import Container from "base_components/Container"
import Tables, { TableRow, ThWithSort as Th } from "base_components/Tables"
import TableRowCourses from "./components/TableRowCourses"

const ContainerTableCourses = Container.extend`
  .table-responsive {
    width: 100%;
  }
`

const TableCourses = ({ match }) => (
  <ContainerTableCourses>
    <Tables>
      <thead>
        <TableRow>
          <Th>Name</Th>
          <Th>Date Created</Th>
          <Th>Active Users</Th>
          <Th>Lessons</Th>
          <Th />
        </TableRow>
      </thead>
      <TableRowCourses match={match} />
    </Tables>
  </ContainerTableCourses>
)

TableCourses.propTypes = {
  match: PropTypes.object.isRequired
}

export default TableCourses
