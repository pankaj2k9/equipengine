import React, { Fragment } from "react"

import ExpansionPanel from "base_components/ExpansionPanel"
import Button from "base_components/RootButton"
import IconDownload from "react-icons/lib/fa/download"
import styled from "styled-components"

import TaskAnswer from "../TaskAnswer"

const IconButton = styled(Button)`
  margin-top: 0.6em;
  svg {
    margin-left: 0.5em;
  }
`

const TaskReading = ({ task }) => (
  <ExpansionPanel
    title={task.description}
    subtitle="Reading"
    summary={
      <Fragment>
        {Array.isArray(task.attachments) &&
          task.attachments.map(attachment => (
            <IconButton light lightBorder>
              {attachment.name || "Download"}
              <IconDownload />
            </IconButton>
          ))}
      </Fragment>
    }
  >
    <TaskAnswer />
  </ExpansionPanel>
)

TaskReading.propTypes = {}

export default TaskReading
