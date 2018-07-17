import React from "react"

import ListItem from "./ListItem"

import { Root, Header, Text, List, Form } from "./elements"

const MessagesList = () => (
  <Root>
    <Header>
      <Text>Conversation: Steve Long, Jane Doe</Text>
    </Header>
    <List>
      <ListItem />
      <ListItem />
    </List>
    <Form />
  </Root>
)

export default MessagesList
