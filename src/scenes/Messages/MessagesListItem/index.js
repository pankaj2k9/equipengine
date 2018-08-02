import React from "react"

import DateTime from "base_components/DateTime"
import avatar from "resources/images/user.png"

import { Root, Container, Avatar, Time, Text } from "./elements"

const MessagesListItem = ({ info }) => (
  <Root>
    <Container>
      <Avatar image={avatar} />
      <Time>
        <DateTime date={new Date(info.created_at)} />
      </Time>
    </Container>
    <Text>{info.message}</Text>
  </Root>
)

export default MessagesListItem
