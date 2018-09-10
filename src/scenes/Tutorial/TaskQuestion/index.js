import React from "react"
import ExpansionPanel from "base_components/ExpansionPanel"

import TaskComments from "../TaskComments"

const TaskQuestion = ({ task }) => (
  <ExpansionPanel title={task.description} subtitle="Question">
    <TaskComments task={task} />
  </ExpansionPanel>
)

TaskQuestion.propTypes = {}

export default TaskQuestion
