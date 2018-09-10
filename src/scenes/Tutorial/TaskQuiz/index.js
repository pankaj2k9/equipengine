import React, { Fragment } from "react"

import ExpansionPanel from "base_components/ExpansionPanel"
import Button from "base_components/RootButton"
import modal from "hoc/modal"

import TaskComments from "../TaskComments"
import Quiz from "../Quiz"

const TaskQuiz = ({ isOpen, onOpen, onClose, task }) => (
  <Fragment>
    <ExpansionPanel
      title={task.description}
      subtitle="Quiz"
      summary={
        <Button light lightBorder onClick={onOpen}>
          Start the Quiz
        </Button>
      }
    >
      <TaskComments task={task} />
    </ExpansionPanel>

    <Quiz isOpen={isOpen} onClose={onClose} />
  </Fragment>
)

TaskQuiz.propTypes = {}

export default modal(TaskQuiz)
