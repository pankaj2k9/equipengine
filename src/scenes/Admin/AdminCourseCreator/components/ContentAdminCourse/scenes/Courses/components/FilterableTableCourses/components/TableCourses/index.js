import React from 'react'
import PropTypes from 'prop-types'
//
import Container from 'base_components/Container'
import Tables, { TableRow } from 'base_components/Tables'
import TableRowCourses from './components/TableRowCourses'

const ContainerTableCourses = Container.extend`
  .table-responsive {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    .table-responsive {
      width: calc(100% - 201.59px);
    }
  }
`

const TableCourses = ({ match }) => (
  <ContainerTableCourses>
    <Tables>
      <thead>
        <TableRow>
          <th>Name</th>
          <th>Date Created</th>
          <th>Active Users</th>
          <th>Lessons</th>
          <th />
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
