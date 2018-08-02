import React from "react"
import styled from "styled-components"

import UserAvatar from "base_components/UserAvatar"

export const Root = styled.div`
  > * {
    margin: 0 0.5em;
  }
`

const UserInfoFormatter = ({
  user: { first_name, last_name, avatar, email }
}) => (
  <Root>
    <UserAvatar image={avatar && avatar.url} />
    <span>
      {first_name || last_name ? (
        `${first_name || ""} ${last_name || ""}`
      ) : (
        <small>{email}</small>
      )}
    </span>
  </Root>
)

export default UserInfoFormatter
