import React from "react"

import ListItem from "./ListItem"

import { Header, Title, Icon, ListRoot } from "./elements"

import iconPen from "./write-pen.svg"

const MessagesList = () => {
  return (
    <div>
      <Header>
        <Title>New Message</Title>
        <Icon alt="Icon pen" src={iconPen} />
      </Header>
      <ListRoot>
        <ListItem />
      </ListRoot>
    </div>
  )
}

export default MessagesList
