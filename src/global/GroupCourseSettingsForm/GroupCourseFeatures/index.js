import React from "react"

import { FormGroup, Switch } from "base_components/RootForm"
import {
  Root,
  CourseFilesLabel,
  CourseDiscussionLabel,
  StudentContentLabel,
  FormContainer
} from "./elements"

const GroupCourseFeatures = ({
  isFilesEnabled,
  isDiscussionEnabled,
  isStudentContentEnabled,
  onChange
}) => (
  <Root title="Features">
    <FormGroup isFlex>
      <CourseFilesLabel> Course files page </CourseFilesLabel>
      <Switch
        value={isFilesEnabled}
        name="isFilesEnabled"
        onChange={onChange}
      />
    </FormGroup>
    <FormGroup isFlex>
      <CourseDiscussionLabel> Course discussion page </CourseDiscussionLabel>
      <Switch
        value={isDiscussionEnabled}
        name="isDiscussionEnabled"
        onChange={onChange}
      />
    </FormGroup>
    <FormContainer>
      <FormGroup isFlex>
        <StudentContentLabel>Students can post new content</StudentContentLabel>
        <Switch
          value={isStudentContentEnabled}
          disabled={!isDiscussionEnabled}
          name="isStudentContentEnabled"
          onChange={onChange}
        />
      </FormGroup>
    </FormContainer>
  </Root>
)

export default GroupCourseFeatures
