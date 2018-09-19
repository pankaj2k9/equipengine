import React, { Component } from "react"
import styled from "styled-components"

import AttachmentChooser from "base_components/AttachmentChooser"
import RootForm, { TextArea } from "base_components/RootForm"
import Button from "base_components/RootButton"

const ButtonContainer = styled.div`
  display: flex;
  float: right;
`

class MessageForm extends Component {
  state = {
    message: "",
    attachment: null
  }

  handleChange = event => {
    this.setState({ message: event.target.value })
  }

  handleChooseFile = file =>
    this.setState({
      attachment: file
    })

  handleSendMessage = event => {
    event.preventDefault()

    const { onSendMessage } = this.props
    const { message } = this.state

    if (onSendMessage) {
      onSendMessage(message)
      this.setState({ message: "" })
    }
  }

  render() {
    const { className, placeholder } = this.props
    const { attachment, message } = this.state

    return (
      <RootForm className={className}>
        <TextArea
          name="thread"
          placeholder={placeholder}
          value={message}
          onChange={this.handleChange}
        />

        <ButtonContainer>
          <AttachmentChooser
            attachment={attachment}
            onChoose={this.handleChooseFile}
          />
          <Button onClick={this.handleSendMessage}>Submit</Button>
        </ButtonContainer>
      </RootForm>
    )
  }
}

export default MessageForm
