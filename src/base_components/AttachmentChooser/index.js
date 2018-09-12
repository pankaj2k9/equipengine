import React, { Component } from "react"

import ButtonUpload from "base_components/ButtonUpload"
import FileChooser from "base_components/FileChooser"
import iconAttachFile from "resources/images/open-file.svg"
import { AttachmentIcon, AttachmentName } from "./elements"

class AttachmentChooser extends Component {
  handleAttachmentChange = ([attachment]) => {
    if (attachment) {
      this.props.onChoose(attachment)
    }
  }

  handleButtonUploadClick = () => {
    this.fileChooserRef.open()
  }

  render() {
    const { attachment, attachmentPosition, type } = this.props

    return (
      <React.Fragment>
        {/* Left to button position of just uploaded attachment */}
        {attachment &&
          (attachmentPosition === "left" || !attachmentPosition) && (
            <AttachmentName left>{attachment.name}</AttachmentName>
          )}
        {type === "button" ? (
          <ButtonUpload onClick={this.handleButtonUploadClick} />
        ) : (
          // By default it shows attach icon only
          <AttachmentIcon
            alt="Add attachment"
            src={iconAttachFile}
            onClick={this.handleButtonUploadClick}
          />
        )}
        {/* Right to button position of just uploaded attachment */}
        {attachment &&
          attachmentPosition === "right" && (
            <AttachmentName right>{attachment.name}</AttachmentName>
          )}
        <FileChooser
          // Only following formats are allowed by attachment API
          accept=".jpg,.jpeg,.gif,.png,.mov,.mp4,.3gp,.webm,.m4v,.avi,.pdf,.ppt,.pptx,.doc,.docx,.zip,.xlsx,.xls,.csv,.mp3,.wav,.mpg"
          ref={input => {
            this.fileChooserRef = input
          }}
          onChooseFiles={this.handleAttachmentChange}
        />
      </React.Fragment>
    )
  }
}

export default AttachmentChooser
