import React from "react"
// components
import ListControl, { ListItemControl } from "base_components/ListControl"
import Button from "base_components/RootButton"
import { Label } from "base_components/RootForm"
import {
  ACTIVE_COURSE_IN_GROUP_STATUS,
  PAUSE_COURSE_IN_GROUP_STATUS
} from "services/constants"

import { Root } from "./elements"

const GroupCourseControls = ({
  courseStatus,
  handleCourseStatusChange,
  handleDeleteCourse
}) => (
  <Root>
    <ListControl>
      <ListItemControl>
        {courseStatus === "active" ? (
          <Button
            onClick={() =>
              handleCourseStatusChange(
                PAUSE_COURSE_IN_GROUP_STATUS,
                "courseStatus"
              )
            }
            large
            light
            lightBorder
          >
            Pause Course
          </Button>
        ) : (
          <Button
            onClick={() =>
              handleCourseStatusChange(
                ACTIVE_COURSE_IN_GROUP_STATUS,
                "courseStatus"
              )
            }
            large
            light
            lightBorder
          >
            Start Course
          </Button>
        )}
        <Label light>
          Course remains visible to teachers but access is denied for students.
        </Label>
      </ListItemControl>
      <ListItemControl>
        <Button onClick={handleDeleteCourse} large light lightBorder>
          Remove Course
        </Button>
        <Label light>
          Once this course has been removed it cannot be restored. All data will
          be lost.
        </Label>
      </ListItemControl>
    </ListControl>
  </Root>
)

export default GroupCourseControls
