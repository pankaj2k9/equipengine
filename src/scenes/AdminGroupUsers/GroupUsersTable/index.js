import React from "react"

import { ACTIVE_USER_STATUS } from "services/constants"
import RoleUser from "base_components/RoleUser"
import StatusCircle from "base_components/StatusCircle"
import Table, {
  DateCellFormatter,
  DetailsButtonCellFormatter
} from "base_components/Table"
import UserAvatar from "base_components/UserAvatar"

const PROFILE_COLUMN = "profile"
const LAST_NAME = "last_name"
const FIRST_NAME = "first_name"
const DATE_COLUMN = "date_added"
const STATUS_COLUMN = "status"
const ROLE_COLUMN = "role"
const DETAILS_COLUMN = "details"

const columns = [
  {
    name: PROFILE_COLUMN,
    title: "Profile",
    width: "15%",
    getCellValue: row => <UserAvatar image={row[PROFILE_COLUMN]} />
  },
  {
    name: LAST_NAME,
    title: "Last name",
    width: "15%"
  },
  {
    name: FIRST_NAME,
    title: "First name",
    width: "15%"
  },
  {
    name: DATE_COLUMN,
    title: "Date added",
    align: "center",
    width: "10%",
    getCellValue: row => <DateCellFormatter date={new Date(row[DATE_COLUMN])} />
  },
  {
    name: STATUS_COLUMN,
    title: "Status",
    align: "center",
    width: "10%",
    getCellValue: row => <StatusCircle disabled={!row[STATUS_COLUMN]} />
  },
  {
    name: ROLE_COLUMN,
    align: "center",
    title: "Role",
    width: "15%",
    getCellValue: row => <RoleUser roleUser={row[ROLE_COLUMN]} />
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

const userToRow = (user, onUserClick) => ({
  [PROFILE_COLUMN]: user.avatar && user.avatar.url,
  [FIRST_NAME]: user.first_name,
  [LAST_NAME]: user.last_name,
  [DATE_COLUMN]: user.date_added,
  [STATUS_COLUMN]: user.status === ACTIVE_USER_STATUS,
  [ROLE_COLUMN]: user.role,
  [DETAILS_COLUMN]: () => onUserClick(user)
})

const UsersTable = ({ className, users, onUserClick }) => (
  <Table
    className={className}
    columns={columns}
    rowFontSize="16px"
    rows={
      Array.isArray(users)
        ? users.map(user => userToRow(user, onUserClick))
        : []
    }
  />
)

export default UsersTable
