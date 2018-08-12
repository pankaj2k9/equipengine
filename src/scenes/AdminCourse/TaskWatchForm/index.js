import React, { Component, Fragment } from "react"
//
import { FormGroup, Label, Text, TextArea } from "base_components/RootForm"

class TaskWatchForm extends Component {
  handleDescriptionChange = ({ target: { value } }) => {
    this.props.onChange({ ...this.props.task, description: value })
  }

  handleVideoLinkChange = ({ target: { value } }) => {
    this.props.onChange({
      ...this.props.task,
      video_link: value
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
            placeholder="Type description..."
            onChange={this.handleDescriptionChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Paste video link</Label>
          <FormGroup>
            <Text
              value={task.video_link}
              placeholder="https://www.youtube.com/watch?v=VeBOJ0bAI6Q"
              onChange={this.handleVideoLinkChange}
            />
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label>Choose from your library</Label>
        </FormGroup>
      </Fragment>
    )
  }
}

export default TaskWatchForm
