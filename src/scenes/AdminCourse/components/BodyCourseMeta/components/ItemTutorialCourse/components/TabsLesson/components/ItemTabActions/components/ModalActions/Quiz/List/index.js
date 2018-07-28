import React, { Fragment } from "react"

import IconMenu from "react-icons/lib/md/dehaze"

import { Root, ButtonAdd, ListItemRoot } from "./elements"
import DragDrop, {
  DroppableList as BaseDroppableList,
  DroppableListItem
} from "base_components/DragDrop"

import { DROPPABLE_LIST_TYPE } from "../constants"

const ListItem = () => (
  <ListItemRoot>
    <i>
      <IconMenu />
    </i>
    <div>What is the difference between an apple and a orange?</div>
  </ListItemRoot>
)

const List = () => (
  <Root>
    <ButtonAdd iconPosition="right" text="Add Question" />
    <DragDrop>
      <BaseDroppableList droppableId="droppable-11" type="QUIZ_QUESTIONS">
        {list => (
          <Fragment>
            <DroppableListItem
              draggableId="draggable-11"
              type={DROPPABLE_LIST_TYPE}
              index={0}
              key="jjdsfi88sdfj"
            >
              <ListItem />
            </DroppableListItem>
            <DroppableListItem
              draggableId="draggable-12"
              type={DROPPABLE_LIST_TYPE}
              index={0}
              key="jjdsfi88sdfj"
            >
              <ListItem />
            </DroppableListItem>
            <DroppableListItem
              draggableId="draggable-13"
              type={DROPPABLE_LIST_TYPE}
              index={0}
              key="jjdsfi88sdfj"
            >
              <ListItem />
            </DroppableListItem>
          </Fragment>
        )}
      </BaseDroppableList>
    </DragDrop>
  </Root>
)

export default List
