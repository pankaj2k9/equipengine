import React, { Fragment } from 'react'
//
import {DroppableList, DroppableListItem} from 'base_components/DragDrop'
import ListItemTutorial from './components/ListItemTutorial'
import { DROPPABLE_LIST_TYPE } from './constants'

const ListTutorial = () => (
  <DroppableList droppableId='droppable-01' type='GROUP_COURSE'>
    {(list) => (
      <Fragment>
        <DroppableListItem
          draggableId='draggable-01'
          type={DROPPABLE_LIST_TYPE}
          index={0}
          key='jjdsfi88sdfj'
        >
          <ListItemTutorial />
        </DroppableListItem>
        <DroppableListItem
          draggableId='draggable-02'
          type={DROPPABLE_LIST_TYPE}
          index={1}
          key='jjdsfi88sdfm'
        >
          <ListItemTutorial />
        </DroppableListItem>
      </Fragment>
    )}
  </DroppableList>
)

export default ListTutorial
