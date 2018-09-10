import React from "react"
import PropTypes from "prop-types"

import TaskReading from "../TaskReading"
import TaskQuestion from "../TaskQuestion"
import TaskQuiz from "../TaskQuiz"
import TaskWatch from "../TaskWatch"
import {
  TASK_QUESTION_TYPE,
  TASK_QUIZ_TYPE,
  TASK_READING_TYPE,
  TASK_WATCH_TYPE
} from "services/constants"

const Task = ({ task }) => {
  if (!task || !task.action_type) {
    return <div>Unknown task</div>
  }

  if (task.action_type === TASK_QUESTION_TYPE) {
    return <TaskQuestion task={task} />
  }

  if (task.action_type === TASK_READING_TYPE) {
    return <TaskReading task={task} />
  }

  if (task.action_type === TASK_QUIZ_TYPE) {
    return <TaskQuiz task={task} />
  }

  if (task.action_type === TASK_WATCH_TYPE) {
    return <TaskWatch task={task} />
  }

  return <div>Task category {task.category} is unknown</div>
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task
