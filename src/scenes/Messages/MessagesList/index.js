import React from "react"

import MessagesListItem from "../MessagesListItem"
import Loading from "base_components/Loading"

import { Root, Header, Text, List, Form, SelectChat } from "./elements"

const MessagesList = ({
  currentChatUsers,
  currentChatMessages,
  isFetchingCurrentChat,
  onWriteMessage,
  onSendMessage,
  textMessage
}) => (
  <Root>
    {currentChatMessages.length || isFetchingCurrentChat ? (
      <React.Fragment>
        <Header>
          <Text>Conversation:</Text>
        </Header>
        <List>
          {isFetchingCurrentChat ? (
            <Loading />
          ) : (
            currentChatMessages.map(message => (
              <MessagesListItem info={message} />
            ))
          )}
        </List>
        <Form
          onWriteMessage={onWriteMessage}
          onSendMessage={onSendMessage}
          textMessage={textMessage}
        />
      </React.Fragment>
    ) : (
      <SelectChat>Please select a chat</SelectChat>
    )}
  </Root>
)

export default MessagesList
