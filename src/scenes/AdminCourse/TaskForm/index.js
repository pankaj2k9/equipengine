import React, { Component } from "react"
import Select from "react-select"

import { FormGroup, Label } from "base_components/RootForm"
import TaskQuestionForm from "../TaskQuestionForm"
import TaskQuizForm from "../TaskQuizForm"
import TaskReadingForm from "../TaskReadingForm"
import TaskWatchForm from "../TaskWatchForm"
import {
  TASK_QUESTION_TYPE,
  TASK_QUIZ_TYPE,
  TASK_READING_TYPE,
  TASK_WATCH_TYPE
} from "services/constants"

class TaskForm extends Component {
  handleTypeChange = option => {
    this.props.onChange({
      action_type: option ? option.value : null,
      id: this.props.task.id
    })
  }

  handleTaskChange = task => {
    this.props.onChange(task)
  }

  render() {
    const { task } = this.props
    return (
      <React.Fragment>
        <FormGroup>
          <Label>Select task type</Label>
          <Select
            value={task.action_type}
            onChange={this.handleTypeChange}
            options={[
              { value: TASK_READING_TYPE, label: "Reading" },
              { value: TASK_QUESTION_TYPE, label: "Question" },
              { value: TASK_WATCH_TYPE, label: "Watch" },
              { value: TASK_QUIZ_TYPE, label: "Quiz" }
            ]}
          />
        </FormGroup>
        {task.action_type === TASK_QUESTION_TYPE && (
          <TaskQuestionForm task={task} onChange={this.handleTaskChange} />
        )}
        {task.action_type === TASK_READING_TYPE && (
          <TaskReadingForm task={task} onChange={this.handleTaskChange} />
        )}
        {task.action_type === TASK_WATCH_TYPE && (
          <TaskWatchForm task={task} onChange={this.handleTaskChange} />
        )}
        {task.action_type === TASK_QUIZ_TYPE && (
          <TaskQuizForm task={task} onChange={this.handleTaskChange} />
        )}
      </React.Fragment>
    )
  }
}

export default TaskForm
