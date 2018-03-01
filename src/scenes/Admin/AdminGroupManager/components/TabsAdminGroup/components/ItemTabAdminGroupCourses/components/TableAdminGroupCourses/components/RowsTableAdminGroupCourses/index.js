import React, {Fragment} from 'react'
// sub components
import RowAdminGroupCourse from './components/RowAdminGroupCourse'
// drag and drop
import {DroppableList, DroppableListItem} from 'base_components/DragDrop'
import {DROPPABLE_LIST_TYPE} from './constants'

const RowsTableAdminGroupCourses = () => (
  <DroppableList droppableId='droppable-01' type='GROUP_COURSE'>
    {(list) => (
      <Fragment>
        <DroppableListItem
          draggableId='draggable-01'
          type={DROPPABLE_LIST_TYPE}
          index={0}
          key='jjdsfi88sdfj'
        >
          <RowAdminGroupCourse />
        </DroppableListItem>
        <DroppableListItem
          draggableId='draggable-02'
          type={DROPPABLE_LIST_TYPE}
          index={1}
          key='jjdsfi88sdfm'
        >
          <RowAdminGroupCourse />
        </DroppableListItem>
      </Fragment>
    )}
  </DroppableList>
)

export default RowsTableAdminGroupCourses
