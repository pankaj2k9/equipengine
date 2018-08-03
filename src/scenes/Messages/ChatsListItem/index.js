import React from "react"

import avatar from "resources/images/user.png"
import { Anchor, Avatar, Container, Top, Message } from "./elements"
import DateTime from "base_components/DateTime"

const ChatsListItem = ({
  chat,
  getChatMessages,
  deleteChatRoom,
  deleteMessage,
  myId,
  currentChatMessages,
  isActive
}) => (
  <li onClick={_ => getChatMessages(chat.id, chat.users)}>
    <Anchor href="" isActive={isActive}>
      <Avatar small image={avatar} />
      <Container>
        <Top>
          <span>
            {chat.users[0].first_name} {chat.users[0].last_name}
          </span>
          <DateTime date={new Date(chat.created_at)} horizontal />
        </Top>
        <Message>{chat.title}</Message>
      </Container>
    </Anchor>
  </li>
)

export default ChatsListItem
