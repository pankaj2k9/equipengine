import React from "react"
import { connect } from "react-redux"
import { compose } from "recompose"
import { bindActionCreators } from "redux"
import { createStructuredSelector } from "reselect"

import Loading from "base_components/Loading"
import RoleUser from "base_components/RoleUser"
import { Checkbox } from "base_components/RootForm/components/Checkbox"
import StatusCircle from "base_components/StatusCircle"
import Table, {
  DateCellFormatter,
  DetailsButtonCellFormatter
} from "base_components/Table"
import UserAvatar from "base_components/UserAvatar"

import { selectors } from "../selectors"
import { actions } from "../ducks"

const ID_COLUMN = "id"
const PROFILE_COLUMN = "profile"
const LAST_NAME = "last_name"
const FIRST_NAME = "first_name"
const DATE_COLUMN = "date_added"
const STATUS_COLUMN = "status"
const ROLE_COLUMN = "role"
const DETAILS_COLUMN = "details"

const userToRow = (user, onUserClick) => ({
  [ID_COLUMN]: user.id,
  [PROFILE_COLUMN]: user.avatar && user.avatar.url,
  [FIRST_NAME]: user.first_name,
  [LAST_NAME]: user.last_name,
  [DATE_COLUMN]: user.date_added,
  [STATUS_COLUMN]: user.status,
  [ROLE_COLUMN]: user.role,
  [DETAILS_COLUMN]: () => onUserClick(user)
})

const UsersTable = ({
  className,
  isDeletingUsersFromGroup,
  isUpdatingUserGroupStatus,
  onUserClick,
  selectedGroupUsers,
  toggleGroupUserState,
  users
}) => {
  const getColumns = () => [
    {
      name: ID_COLUMN,
      width: "5%",
      getCellValue: row => (
        <Checkbox
          defaultChecked={selectedGroupUsers.some(id => id === row.id)}
          checked={selectedGroupUsers.some(id => id === row.id)}
          onChange={() => toggleGroupUserState(row.id)}
        />
      )
    },
    {
      name: PROFILE_COLUMN,
      title: "Profile",
      width: "10%",
      getCellValue: row => <UserAvatar image={row[PROFILE_COLUMN]} />
    },
    {
      align: "center",
      defaultSorting: "asc",
      name: LAST_NAME,
      title: "Last name",
      width: "15%"
    },
    {
      align: "center",
      defaultSorting: "asc",
      name: FIRST_NAME,
      title: "First name",
      width: "15%"
    },
    {
      defaultSorting: "asc",
      name: DATE_COLUMN,
      title: "Date added",
      align: "center",
      width: "10%",
      getCellValue: row => (
        <DateCellFormatter date={new Date(row[DATE_COLUMN])} />
      )
    },
    {
      defaultSorting: "asc",
      name: STATUS_COLUMN,
      title: "Status",
      align: "center",
      width: "10%",
      getCellValue: row => (
        <StatusCircle disabled={!row[STATUS_COLUMN]} state={row.status} />
      )
    },
    {
      defaultSorting: "asc",
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

  return isDeletingUsersFromGroup || isUpdatingUserGroupStatus ? (
    <Loading />
  ) : (
    <Table
      className={className}
      columns={getColumns()}
      rowFontSize="16px"
      rows={
        Array.isArray(users)
          ? users.map(user => userToRow(user, onUserClick))
          : []
      }
      verticalAlign="middle"
    />
  )
}

const mapState = () =>
  createStructuredSelector({
    isDeletingUsersFromGroup: selectors.selectIsDeletingUsersFromGroup(),
    isUpdatingUserGroupStatus: selectors.selectIsUpdatingUserGroupStatus(),
    selectedGroupUsers: selectors.selectSelectedGroupUser()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      toggleGroupUserState: actions.toggleGroupUserState
    },
    dispatch
  )

export default compose(component =>
  connect(
    mapState,
    mapDispatch
  )(component)
)(UsersTable)
