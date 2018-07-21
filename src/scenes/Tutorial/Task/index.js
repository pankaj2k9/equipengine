import React from "react"
import PropTypes from "prop-types"

import TaskReading from "../TaskReading"
import TaskQuestion from "../TaskQuestion"
import TaskQuiz from "../TaskQuiz"

const Task = ({ task }) => {
  if (!task || !task.action_type) {
    return <div>Unknown task</div>
  }

  if (task.action_type === "question") {
    return <TaskQuestion task={task} />
  }

  if (task.action_type === "reading") {
    return <TaskReading task={task} />
  }

  if (task.action_type === "quiz") {
    return <TaskQuiz task={task} />
  }

  return <div>Task category {task.category} is unknown</div>
}

Task.propTypes = {
  task: PropTypes.object.isRequired
}

export default Task
