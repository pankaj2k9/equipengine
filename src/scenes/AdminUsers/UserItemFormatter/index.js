import React from "react"

import RoleUser from "base_components/RoleUser"
import StatusCircle from "base_components/StatusCircle"
import UserInfoFormatter from "base_components/UserInfoFormatter"

import { Root, Pair } from "./elements"

const UserItemFormatter = ({
  user: { first_name, last_name, avatar, email, status, organization_settings }
}) => (
  <Root>
    <UserInfoFormatter user={{ first_name, last_name, avatar, email }} />
    <Pair>
      <RoleUser
        roleUser={organization_settings && organization_settings.role}
      />
      <StatusCircle state={status} />
    </Pair>
  </Root>
)

export default UserItemFormatter
