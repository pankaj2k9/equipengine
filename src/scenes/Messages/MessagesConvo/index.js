import React from "react"

import ConvoListItem from "./MessagesConvoList"

import { Root, Header, Text, ConvoList, Form } from "./elements"

const MessagesConvo = () => (
  <Root>
    <Header>
      <Text>Conversation: Steve Long, Jane Doe</Text>
    </Header>
    <ConvoList>
      <ConvoListItem />
      <ConvoListItem />
    </ConvoList>
    <Form />
  </Root>
)

export default MessagesConvo
