import React from "react"
import { compose } from "recompose"

import ChatsListItem from "../ChatsListItem"
import NewMessageModal from "../NewMessageModal"

import { Header, ListRoot } from "./elements"

import Button from "base_components/RootButton"

import modal from "hoc/modal"

import form from "hoc/form"

const ChatsList = ({
  createChatRoom,
  currentChatId,
  currentChatMessages,
  myId,
  deleteMessage,
  deleteChatRoom,
  getChatMessages,
  isOpen,
  onOpen,
  onClose,
  chats,
  fields: { message },
  refs: { attachment: attachmentRef },
  onChange
}) => {
  return (
    <div>
      <Header>
        <Button onClick={onOpen} light lightBorder>
          New Message
        </Button>
      </Header>
      <ListRoot>
        {chats.map(chat => {
          return (
            <ChatsListItem
              key={chat.id}
              chat={chat}
              getChatMessages={getChatMessages}
              isActive={currentChatId === chat.id}
              deleteChatRoom={deleteChatRoom}
              myId={myId}
              deleteMessage={deleteMessage}
              currentChatMessages={currentChatMessages}
            />
          )
        })}
      </ListRoot>
      <NewMessageModal
        message={message}
        attachmentRef={attachmentRef}
        onChange={onChange}
        isOpen={isOpen}
        onClose={onClose}
        myId={myId}
        createChatRoom={createChatRoom}
      />
    </div>
  )
}

export default compose(
  modal,
  form(
    {
      message: "",
      attachment: null
    },
    ["attachment"]
  )
)(ChatsList)
