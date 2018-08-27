import React from "react"
// sub components
import RoleUser from "base_components/RoleUser"
import StatusUser from "./components/StatusUser"
// base components
import { TableRow, Td } from "base_components/Tables"
import UserAvatar from "base_components/UserAvatar"
import iconUser from "resources/images/user.png"
import RouteButton from "base_components/RouteButton"
import Form, { Checkbox } from "base_components/RootForm"

// compose a table data.
const TableDataGroupUser = ({ children }) => <Td center>{children}</Td>

const RowsTableAdminGroupUsers = () => (
  <tbody>
    <TableRow>
      <TableDataGroupUser>
        <Form>
          <Checkbox name="user-control-checkbox" />
        </Form>
      </TableDataGroupUser>
      <TableDataGroupUser>
        <UserAvatar image={iconUser} size="small" />
      </TableDataGroupUser>
      <TableDataGroupUser>Doe</TableDataGroupUser>
      <TableDataGroupUser>Jane</TableDataGroupUser>
      <TableDataGroupUser>22/03/2017</TableDataGroupUser>
      <TableDataGroupUser>
        <StatusUser isActive />
      </TableDataGroupUser>
      <TableDataGroupUser>
        <RoleUser roleUser="Teacher" />
      </TableDataGroupUser>
      <TableDataGroupUser>
        <RouteButton to="/secure/admin/users" light lightBorder>
          User Details
        </RouteButton>
      </TableDataGroupUser>
    </TableRow>
    <TableRow>
      <TableDataGroupUser>
        <Form>
          <Checkbox name="user-control-checkbox" />
        </Form>
      </TableDataGroupUser>
      <TableDataGroupUser>
        <UserAvatar image={iconUser} size="small" />
      </TableDataGroupUser>
      <TableDataGroupUser>Hall</TableDataGroupUser>
      <TableDataGroupUser>Tim</TableDataGroupUser>
      <TableDataGroupUser>22/03/2017</TableDataGroupUser>
      <TableDataGroupUser>
        <StatusUser isActive />
      </TableDataGroupUser>
      <TableDataGroupUser />
      <TableDataGroupUser>
        <RouteButton to="/secure/admin/users" light lightBorder>
          User Details
        </RouteButton>
      </TableDataGroupUser>
    </TableRow>
  </tbody>
)

export default RowsTableAdminGroupUsers
