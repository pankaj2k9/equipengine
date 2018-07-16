import React from "react"

import avatar from "resources/images/user.png"

import { Root, Container, Avatar, Time, Text } from "./elements"

const ConvoListItem = () => (
  <Root>
    <Container>
      <Avatar image={avatar} />
      <Time>21 Sep</Time>
      <Time>1:00pm</Time>
    </Container>
    <Text>
      Hi, Loreum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      risus felis, tincidunt quis eleifend id, interdum vel risus. Mauris
      iaculis sem nisl, vel euismod tellus sagittis ac. Vivamus vitae erat quis
      lorem tempus mollis.
    </Text>
  </Root>
)

export default ConvoListItem
