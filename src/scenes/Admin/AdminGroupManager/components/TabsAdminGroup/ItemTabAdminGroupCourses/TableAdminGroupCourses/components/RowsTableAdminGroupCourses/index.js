import React, { Fragment } from "react"
// sub components
import RowAdminGroupCourse from "./components/RowAdminGroupCourse"
// drag and drop
import { DroppableList, DroppableListItem } from "base_components/DragDrop"
import { DROPPABLE_LIST_TYPE } from "./constants"

// we specify that we will use 'tr' tag as draggable element...
const DragItemWrapperElement = ({ children, innerRef, ...props }) => (
  <tr ref={innerRef} {...props}>
    {children}
  </tr>
)

// ...and put it to 'wrapperElement' prop
const Item = ({ children, ...rest }) => (
  <DroppableListItem wrapperElement={DragItemWrapperElement} {...rest}>
    {children}
  </DroppableListItem>
)

const DragListWrapperElement = ({ children, innerRef, ...props }) => (
  <tbody ref={innerRef} {...props}>
    {children}
  </tbody>
)

const List = ({ children, ...rest }) => (
  <DroppableList wrapperElement={DragListWrapperElement} {...rest}>
    {children}
  </DroppableList>
)

const RowsTableAdminGroupCourses = () => (
  <List droppableId="droppable-01" type="GROUP_COURSE">
    {list => (
      <Fragment>
        <Item
          draggableId="draggable-01"
          type={DROPPABLE_LIST_TYPE}
          index={0}
          key="jjdsfi88sdfj"
        >
          <RowAdminGroupCourse i={0} />
        </Item>
        <Item
          draggableId="draggable-02"
          type={DROPPABLE_LIST_TYPE}
          index={1}
          key="jjdsfi88sdfm"
        >
          <RowAdminGroupCourse i={1} />
        </Item>
        <Item
          draggableId="draggable-03"
          type={DROPPABLE_LIST_TYPE}
          index={2}
          key="awgawg"
        >
          <RowAdminGroupCourse i={2} />
        </Item>
        <Item
          draggableId="draggable-04"
          type={DROPPABLE_LIST_TYPE}
          index={3}
          key="hytdhd"
        >
          <RowAdminGroupCourse i={3} />
        </Item>
      </Fragment>
    )}
  </List>
)

export default RowsTableAdminGroupCourses
