import React from "react"

import avatar from "resources/images/user.png"

import { Anchor, Avatar, Container, Top, Date, Message } from "./elements"

const ListItem = () => (
  <li>
    <Anchor href="">
      <Avatar small image={avatar} />
      <Container>
        <Top>
          <span>John Jones</span>
          <Date>22 Sep 4:00pm</Date>
        </Top>
        <Message>
          Hi, Jane can you send me question I asked for the other day when you…
        </Message>
      </Container>
    </Anchor>
  </li>
)

export default ListItem
