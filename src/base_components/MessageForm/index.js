import React, { Component } from "react"

import FileChooser from "base_components/FileChooser"
import RootForm, { TextArea } from "base_components/RootForm"
import Button from "base_components/RootButton"
import iconOpenSrc from "resources/images/open-file.svg"

import { ButtonContainer, AttachmentName, AttachmentIcon } from "./elements"

class MessageForm extends Component {
  state = {
    message: "",
    attachment: null
  }

  handleChange = event => {
    this.setState({ message: event.target.value })
  }

  handleChooseFilesButtonClick = files =>
    this.setState({
      attachment: files[0]
    })

  handleUploadButtonClick = () => this.fileChooserDialog.open()

  render() {
    const { className, onSendMessage, placeholder } = this.props
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
          <AttachmentName>{attachment && attachment.name}</AttachmentName>
          <AttachmentIcon
            alt="Add attachment"
            src={iconOpenSrc}
            onClick={this.handleUploadButtonClick}
          />
          <Button onClick={onSendMessage}>Submit</Button>
        </ButtonContainer>

        <FileChooser
          onChooseFiles={this.handleChooseFilesButtonClick}
          ref={input => {
            this.fileChooserDialog = input
          }}
        />
      </RootForm>
    )
  }
}

export default MessageForm
