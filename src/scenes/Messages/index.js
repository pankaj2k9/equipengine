import React from "react"

import PageWrapper from "global/PageWrapper"

import MessagesList from "./MessagesList"
import MessagesConvo from "./MessagesConvo"

import { Root } from "./elements"

const Messages = () => {
  return (
    <PageWrapper disableMargin>
      <Root>
        <MessagesList />
        <MessagesConvo />
      </Root>
    </PageWrapper>
  )
}

export default Messages
