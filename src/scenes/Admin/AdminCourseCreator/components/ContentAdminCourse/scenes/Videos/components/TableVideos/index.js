import React from "react"
//
import Container from "base_components/Container"
import Tables, { TableRow } from "base_components/Tables"
import TableRowVideos from "./components/TableRowVideos"

const ContainerTableVideos = Container.extend`
  .table-responsive {
    width: 100%;
  }
`
const TableVideos = () => (
  <ContainerTableVideos>
    <Tables>
      <thead>
        <TableRow>
          <th />
          <th>Name</th>
          <th>Length</th>
          <th>Date Added</th>
          <th />
        </TableRow>
      </thead>
      <TableRowVideos />
    </Tables>
  </ContainerTableVideos>
)

export default TableVideos
