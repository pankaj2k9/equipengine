import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import UserDetails from "base_components/UserDetails"
import { Root, Header } from "./elements"
import { selectors } from "../selectors"

const StudentSettingsTab = ({ selectedUser }) => (
  <Root>
    <Header>User Details</Header>
    <UserDetails
      firstName={selectedUser.first_name}
      lastName={selectedUser.last_name}
      email={selectedUser.email}
    />
  </Root>
)

const mapState = () =>
  createStructuredSelector({
    selectedUser: selectors.selectSelectedUser()
  })

export default connect(mapState)(StudentSettingsTab)
