import React from "react"

import PageWrapper from "global/PageWrapper"

import MessagesSidebar from "./MessagesSidebar"
import MessagesConvo from "./MessagesConvo"

import { Root } from "./elements"

const Messages = () => {
  return (
    <PageWrapper disableMargin>
      <Root>
        <MessagesSidebar />
        <MessagesConvo />
      </Root>
    </PageWrapper>
  )
}

export default Messages
