import React, { Component } from "react"
//
import { FormGroup, Label, TextArea } from "base_components/RootForm"

class TaskQuestionForm extends Component {
  handleQuestionChange = ({ target: { value } }) => {
    this.props.onChange({ ...this.props.task, description: value })
  }

  render() {
    const { task } = this.props
    return (
      <FormGroup>
        <Label>Question &#42;</Label>
        <TextArea
          value={task.description}
          onChange={this.handleQuestionChange}
          placeholder="Type your question..."
        />
      </FormGroup>
    )
  }
}

export default TaskQuestionForm
