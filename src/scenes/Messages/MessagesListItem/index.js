import React from "react"

import DateTime from "base_components/DateTime"
import avatar from "resources/images/user.png"

import { Root, Content, Container, Avatar, Time, Text } from "./elements"

const MessagesListItem = ({ info }) => (
  <Root>
    <Container>
      <Content>
        <Avatar image={avatar} />
        <Time>
          <DateTime date={new Date(info.created_at)} />
        </Time>
      </Content>
      <Text>{info.message}</Text>
    </Container>
  </Root>
)

export default MessagesListItem
