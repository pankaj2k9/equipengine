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
  const t = [
    ...tasks,
    {
      action_type: "quiz",
      created_at: "2018-06-26T09:05:40.000+00:00",
      description: "Read this attached book",
      id: 1,
      lesson_id: 1,
      task_user: {
        id: 35,
        task_id: 1,
        user_id: 2,
        course_group_id: 2,
        status: "active"
      },
      updated_at: "2018-06-26T09:05:40.000+00:00",
      user_id: 1
    }
  ]

  return (
    <div>
      <AlignRight>
        <TasksSettings />
      </AlignRight>
      {Array.isArray(t) && tasks.length !== 0 ? (
        <ul>
          {t.map(task => (
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
