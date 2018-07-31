import React from "react"

import MessagesListItem from "../MessagesListItem"
import Loading from "base_components/Loading"

import { Root, Header, Text, List, Form } from "./elements"

const MessagesList = ({
  currentChatUsers,
  currentChatMessages,
  isFetchingCurrentChat,
  onWriteMessage,
  onSendMessage,
  textMessage
}) => (
  <Root>
    <Header>
      <Text>Conversation:</Text>
    </Header>
    <List>
      {isFetchingCurrentChat ? (
        <Loading />
      ) : (
        currentChatMessages.map(element => <MessagesListItem info={element} />)
      )}
    </List>
    <Form
      onWriteMessage={onWriteMessage}
      onSendMessage={onSendMessage}
      textMessage={textMessage}
    />
  </Root>
)

export default MessagesList
