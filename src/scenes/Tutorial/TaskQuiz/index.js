import React from "react"
import ExpansionPanel from "base_components/ExpansionPanel"

import TaskAnswer from "../TaskAnswer"

const TaskQuiz = ({ task }) => (
  <ExpansionPanel title={task.description} subtitle="Quiz">
    <TaskAnswer />
  </ExpansionPanel>
)

TaskQuiz.propTypes = {}

export default TaskQuiz
