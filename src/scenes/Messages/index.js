import React from "react"
import styled from "styled-components"

import MessagesList from "./components/MessagesList"
import MessagesConvo from "./components/MessagesConvo"
import PageWrapper from "global/PageWrapper"

const Messages = styled(({ className }) => {
  return (
    <PageWrapper disableMargin>
      <div className={className}>
        <MessagesList />
        <MessagesConvo />
      </div>
    </PageWrapper>
  )
})`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export default Messages
