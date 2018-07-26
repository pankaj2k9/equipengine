import React from "react"

import RoleUser from "base_components/RoleUser"
import StatusCircle from "base_components/StatusCircle"
import UserAvatar from "base_components/UserAvatar"

import { Root, Pair } from "./elements"

const UserItemFormatter = ({
  user: { first_name, last_name, avatar, email, status, organization_settings }
}) => (
  <Root>
    <Pair>
      <UserAvatar image={avatar.url} />
      <span>
        {first_name || last_name ? (
          `${first_name} ${last_name}`
        ) : (
          <small>{email}</small>
        )}
      </span>
    </Pair>
    <Pair>
      <RoleUser
        roleUser={organization_settings && organization_settings.role}
      />
      <StatusCircle state={status} />
    </Pair>
  </Root>
)

export default UserItemFormatter
