import React, {Fragment} from 'react'
// drag and drop components.
import {DroppableList, DroppableListItem} from 'base_components/DragDrop'
//
import ListItemCourse from './components/ListItemCourse'

// for teacher user courses component.
const ItemTeacherUserCourses = () => (
  <DroppableList droppableId='droppable-01' type='COURSES'>
    {(list) => (
      <Fragment>
        <DroppableListItem
          draggableId='draggable-01'
          type='COURSES'
          index={0}
          key='02348jklj2343'
        >
          <ListItemCourse />
        </DroppableListItem>
        <DroppableListItem
          draggableId='draggable-02'
          type='COURSES'
          index={1}
          key='02348jklj2346'
        >
          <ListItemCourse />
        </DroppableListItem>
      </Fragment>
    )}
  </DroppableList>
)

// we will subscribe this component into hoc to make some components more collapsible.
export default ItemTeacherUserCourses
