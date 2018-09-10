import React, { Fragment } from "react"

import ExpansionPanel from "base_components/ExpansionPanel"
import TaskComments from "../TaskComments"

const TaskWatch = ({ task }) => (
  <ExpansionPanel
    title={task.description}
    subtitle="Watch"
    summary={
      <Fragment>
        {Array.isArray(task.videos) && task.videos.length > 0
          ? "Watch videos: "
          : "No videos found"}
        {Array.isArray(task.videos) &&
          task.videos.map(video => `"${video.title}"`).join(", ")}
      </Fragment>
    }
  >
    <TaskComments task={task} />
  </ExpansionPanel>
)

TaskWatch.propTypes = {}

export default TaskWatch
