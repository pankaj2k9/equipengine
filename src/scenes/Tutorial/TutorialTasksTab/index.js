import React from "react"
import styled from "styled-components"

import Task from "../Task"
import TasksSettings from "../TasksSettings"

const AlignRight = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 18px;
  margin-right: 18px;
`

const ItemTutorialTaskGroup = ({ tasks }) => {
  return (
    <div>
      <AlignRight>
        <TasksSettings />
      </AlignRight>
      {Array.isArray(tasks) && tasks.length !== 0 ? (
        <ul>
          {tasks.map(task => (
            <Task key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <div>There are no tasks in this tutorial</div>
      )}
    </div>
  )
}

export default ItemTutorialTaskGroup
