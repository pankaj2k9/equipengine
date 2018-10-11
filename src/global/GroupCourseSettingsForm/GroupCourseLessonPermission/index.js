import React from "react"

import { FormGroup, Checkbox, Label } from "base_components/RootForm"
import { Root, LessonCompleteLabel, FormGroupSetLesson } from "./elements"

const GroupCourseLessonPermission = ({
  canLessonCompletedByTeacher,
  canLessonCompletedByStudent,
  onChange
}) => (
  <Root>
    <FormGroup isFlex>
      <LessonCompleteLabel>
        Who is able to set lessons as complete?
      </LessonCompleteLabel>
      <FormGroupSetLesson>
        <Checkbox
          name="canLessonCompletedByStudent"
          checked={canLessonCompletedByStudent ? true : false}
          onChange={onChange}
        />
        <Label>Student</Label>
      </FormGroupSetLesson>
      <FormGroupSetLesson>
        <Checkbox
          name="canLessonCompletedByTeacher"
          checked={canLessonCompletedByTeacher ? true : false}
          onChange={onChange}
        />
        <Label>Teacher</Label>
      </FormGroupSetLesson>
    </FormGroup>
  </Root>
)

export default GroupCourseLessonPermission
