import React from "react"

import PageWrapper from "global/PageWrapper"

import MessagesSidebar from "./MessagesSidebar"
import MessagesList from "./MessagesList"

import { Root } from "./elements"

const Messages = () => {
  return (
    <PageWrapper disableMargin>
      <Root>
        <MessagesSidebar />
        <MessagesList />
      </Root>
    </PageWrapper>
  )
}

export default Messages
