import React from "react"
// custom components
import Loading from "base_components/Loading"
import { FormGroup, Switch } from "base_components/RootForm"
import Dropdown from "base_components/RootDropdown"
import { getDropdownValue } from "utils/formFunctions"
import {
  Root,
  CourseCompletionLabel,
  DependentCourseLabel,
  FormContainer,
  FormGroupDropdown
} from "./elements"

const GroupCourseRules = ({
  isFetchingCourses,
  courses = [],
  onChange,
  handleDropdownChange,
  hasCourseDependency,
  preCourseId
}) => (
  <Root title="Course Rules">
    <FormGroup isFlex>
      <CourseCompletionLabel>
        Users must complete another course before this one is available
      </CourseCompletionLabel>
      <Switch
        value={hasCourseDependency}
        disabled={false}
        name="hasCourseDependency"
        onChange={onChange}
      />
    </FormGroup>
    {isFetchingCourses ? (
      <Loading />
    ) : (
      <FormContainer>
        <FormGroup isFlex>
          <DependentCourseLabel>
            Course to be completed before
          </DependentCourseLabel>
          <FormGroupDropdown>
            <Dropdown
              placeholder="Select Course"
              name="preCourseId"
              value={preCourseId}
              disabled={!hasCourseDependency}
              onChange={value =>
                handleDropdownChange(getDropdownValue(value), "preCourseId")
              }
              options={courses.map(course => ({
                label: course.title,
                value: course.id
              }))}
            />
          </FormGroupDropdown>
        </FormGroup>
      </FormContainer>
    )}
  </Root>
)

export default GroupCourseRules
