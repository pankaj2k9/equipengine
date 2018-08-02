import React from "react"
import styled from "styled-components"
import { compose, withHandlers, pure } from "recompose"

import RootForm, { TextArea } from "base_components/RootForm"
import iconDropfile from "resources/images/dropfile.svg"
import Button from "base_components/RootButton"

const MessageForm = styled(
  ({ className, textMessage, onSendMessage, onWriteMessage }) => (
    <RootForm className={className}>
      <TextArea
        name="thread"
        placeholder="Write Something"
        value={textMessage}
        onChange={onWriteMessage}
      />
      <div>
        <img src={iconDropfile} alt="Drop file" />
        <Button onClick={onSendMessage}>Submit</Button>
      </div>
    </RootForm>
  )
)`
  div {
    text-align: right;
    margin-top: 0.5em;
    img {
      margin-right: 1em;
    }
  }
`

export default compose(
  withHandlers({
    onSendMessage: ({ onSendMessage }) => event => {
      event.preventDefault()
      onSendMessage()
    }
  }),
  pure
)(MessageForm)
