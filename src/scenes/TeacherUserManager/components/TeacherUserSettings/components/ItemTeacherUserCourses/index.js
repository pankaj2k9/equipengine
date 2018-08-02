import React, { Fragment } from "react"
import { compose, getContext, renameProp } from "recompose"
// drag and drop components.
import { DroppableList, DroppableListItem } from "base_components/DragDrop"
//
import ListItemCourse from "./components/ListItemCourse"
import { contextPropTypes } from "../../../../proptypes"

// for teacher user courses component.
const ItemTeacherUserCourses = ({ courses, tutorials }) => (
  <DroppableList list={courses} droppableId="droppable-01" type="COURSES">
    {list => (
      <Fragment>
        {courses.map(course => (
          <DroppableListItem
            draggableId={`course-${course.id}`}
            type="COURSES"
            index={0}
            key={course.id}
          >
            <ListItemCourse course={course} tutorials={tutorials} />
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
