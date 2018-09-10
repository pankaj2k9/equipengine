import React from "react"

import Button from "base_components/RootButton"
import FileChooser from "base_components/FileChooser"
import UserAvatar from "base_components/UserAvatar"
import avatarSrc from "resources/images/user.png"
import iconOpenSrc from "resources/images/open-file.svg"

import {
  Root,
  Form,
  Input,
  ButtonContainer,
  AttachmentName,
  AttachmentIcon
} from "./elements"

class TaskCommentForm extends React.Component {
  state = {
    text: "",
    attachment: null
  }

  handleChangeText = ({ target: { value } }) => {
    this.setState({ text: value })
  }

  handleUploadButtonClick = () => {
    this.fileChooserDialog.open()
  }

  handleChooseFilesButtonClick = files => {
    this.setState({
      attachment: files[0]
    })
  }

  handleSubmit = event => {
    const { text, attachment } = this.state
    if (event) {
      event.preventDefault()
    }

    this.props.onSubmit({ text, attachment })
    this.setState({ text: "", attachment: null })
  }

  render() {
    const { text, attachment } = this.state
    return (
      <Root>
        {/* Current user avatar (message sender) */}
        <UserAvatar image={avatarSrc} />

        {/* Text input + Add attachment + Submit button */}
        <Form>
          <Input
            type="text"
            name="question"
            placeholder="Write your answer"
            value={text}
            onChange={this.handleChangeText}
          />
          <ButtonContainer>
            <AttachmentName>{attachment && attachment.name}</AttachmentName>
            <AttachmentIcon
              alt="Add attachment"
              src={iconOpenSrc}
              onClick={this.handleUploadButtonClick}
            />
            <Button onClick={this.handleSubmit}>Submit</Button>
          </ButtonContainer>
        </Form>

        {/* Browser file chooser, not visible by default */}
        <FileChooser
          onChooseFiles={this.handleChooseFilesButtonClick}
          ref={input => {
            this.fileChooserDialog = input
          }}
        />
      </Root>
    )
  }
}

export default TaskCommentForm
