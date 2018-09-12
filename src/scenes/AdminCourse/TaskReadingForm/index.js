import React, { Component, Fragment } from "react"
//
import AttachmentChooser from "base_components/AttachmentChooser"
import AttachmentDownloadButton from "base_components/AttachmentDownloadButton"
import { FormGroup, Label, TextArea } from "base_components/RootForm"

class TaskReadingForm extends Component {
  handleDescriptionChange = ({ target: { value } }) => {
    this.props.onChange({ ...this.props.task, description: value })
  }

  handleAttachmentChoose = attachment => {
    this.props.onChange({
      ...this.props.task,
      attachment
    })
  }

  render() {
    const { task } = this.props
    return (
      <Fragment>
        <FormGroup>
          <Label>Description &#42;</Label>
          <TextArea
            value={task.description}
            onChange={this.handleDescriptionChange}
            placeholder="Type description..."
          />
        </FormGroup>
        <FormGroup>
          <Label>Upload File</Label>
          <div>
            <AttachmentChooser
              type="button"
              attachment={task.attachment}
              attachmentPosition="right"
              onChoose={this.handleAttachmentChoose}
            />
          </div>
        </FormGroup>

        {/* Read-only already saved attachments */}
        {Array.isArray(task.attachments) &&
          task.attachments.length > 0 && (
            <React.Fragment>
              <h4>Saved attachments</h4>
              {task.attachments.map(attachment => (
                <AttachmentDownloadButton attachment={attachment} />
              ))}
            </React.Fragment>
          )}
      </Fragment>
    )
  }
}

export default TaskReadingForm
