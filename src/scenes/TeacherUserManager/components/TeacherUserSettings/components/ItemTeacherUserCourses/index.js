import React, { Fragment } from "react"
// drag and drop components.
import { DroppableList, DroppableListItem } from "base_components/DragDrop"
//
import ListItemCourse from "./components/ListItemCourse"
import { compose, getContext, renameProp } from "recompose"
import { contextPropTypes } from "../../../../proptypes"

// for teacher user courses component.
const ItemTeacherUserCourses = ({ courses }) => (
  <DroppableList list={courses} droppableId="droppable-01" type="COURSES">
    {list => (
      <Fragment>
        {courses.map(course => (
          <DroppableListItem
            draggableId="draggable-01"
            type="COURSES"
            index={0}
            key="02348jklj2343"
          >
            <ListItemCourse course={course} />
          </DroppableListItem>
        ))}
      </Fragment>
    )}
  </DroppableList>
)

// we will subscribe this component into hoc to make some components more collapsible.
export default compose(
  getContext(contextPropTypes),
  renameProp("selectedCourses", "courses")
)(ItemTeacherUserCourses)
