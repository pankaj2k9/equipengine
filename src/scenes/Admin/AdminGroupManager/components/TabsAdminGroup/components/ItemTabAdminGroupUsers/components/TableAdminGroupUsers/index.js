import React from "react"
import styled from "styled-components"
// base
import Tables, { TableRow, Th } from "base_components/Tables"
// sub components
import RowsTableAdminGroupUsers from "./components/RowsTableAdminGroupUsers"
// resources
import arrowDown from "resources/images/arrowDown.svg"

const Icon = styled.img`
  margin-left: 1px;
  margin-top: -2px;
`

// compose a table header
const TableHeaderGroupUser = ({ children, withIcon }) => (
  <Th center>
    {children}
    {withIcon && <Icon alt="icon Search" src={arrowDown} />}
  </Th>
)

// composing the TableAdmin
const TableAdminGroupUsers = () => (
  <Tables>
    <thead>
      <TableRow>
        <TableHeaderGroupUser />
        <TableHeaderGroupUser>Profile</TableHeaderGroupUser>
        <TableHeaderGroupUser withIcon>Last Name</TableHeaderGroupUser>
        <TableHeaderGroupUser withIcon>First Name</TableHeaderGroupUser>
        <TableHeaderGroupUser withIcon>Date Added</TableHeaderGroupUser>
        <TableHeaderGroupUser withIcon>Status</TableHeaderGroupUser>
        <TableHeaderGroupUser withIcon>Role</TableHeaderGroupUser>
        <TableHeaderGroupUser />
      </TableRow>
    </thead>
    <RowsTableAdminGroupUsers />
  </Tables>
)

export default TableAdminGroupUsers
