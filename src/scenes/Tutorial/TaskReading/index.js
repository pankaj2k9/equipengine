import React, { Fragment } from "react"

import AttachmentDownloadButton from "base_components/AttachmentDownloadButton"
import ExpansionPanel from "base_components/ExpansionPanel"
import TaskComments from "../TaskComments"

const TaskReading = ({ task }) => (
  <ExpansionPanel
    title={task.description}
    subtitle="Reading"
    summary={
      <Fragment>
        {Array.isArray(task.attachments) &&
          task.attachments
            .filter(attachment => attachment.data.url)
            .map(attachment => (
              <AttachmentDownloadButton attachment={attachment} />
            ))}
      </Fragment>
    }
  >
    <TaskComments task={task} />
  </ExpansionPanel>
)

TaskReading.propTypes = {}

export default TaskReading
