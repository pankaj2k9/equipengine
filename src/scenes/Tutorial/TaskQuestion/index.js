import React from "react"
import ExpansionPanel from "base_components/ExpansionPanel"

import TaskAnswer from "../TaskAnswer"

const TaskQuestion = ({ task }) => (
  <ExpansionPanel title={task.description} subtitle="Question">
    <TaskAnswer />
  </ExpansionPanel>
)

TaskQuestion.propTypes = {}

export default TaskQuestion
