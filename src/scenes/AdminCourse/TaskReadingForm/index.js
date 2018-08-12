import React, { Component, Fragment } from "react"
//
import { FormGroup, Label, TextArea } from "base_components/RootForm"

class TaskReadingForm extends Component {
  handleDescriptionChange = ({ target: { value } }) => {
    this.props.onChange({ ...this.props.task, description: value })
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
            TODO implement smth like ButtonUpload onUpload=... Upload file{" "}
          </div>
        </FormGroup>
      </Fragment>
    )
  }
}

export default TaskReadingForm
