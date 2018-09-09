import React, { Fragment } from "react"
//
import DragDrop, {
  DroppableList,
  DroppableListItem
} from "base_components/DragDrop"
import TutorialTasksListItem from "../TutorialTasksListItem"

const TutorialTasksList = ({ tasks, onUpdate, onDelete }) => (
  <DragDrop list={tasks}>
    <DroppableList droppableId="droppable-01" type="GROUP_ACTIONS">
      {tasks => (
        <Fragment>
          {tasks.map((task, index) => (
            <DroppableListItem
              key={task.id}
              draggableId={task.id}
              type="GROUP_ACTIONS"
              index={index}
              inlineStyle={{ border: "1px solid #dadada" }}
            >
              <TutorialTasksListItem
                task={task}
                onUpdate={onUpdate}
                onDelete={onDelete}
              />
            </DroppableListItem>
          ))}
        </Fragment>
      )}
    </DroppableList>
  </DragDrop>
)

export default TutorialTasksList
