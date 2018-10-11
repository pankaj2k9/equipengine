import styled from "styled-components"
import { Label, FormGroup } from "base_components/RootForm"
import { FullWidthPanel } from "../elements"

export const Root = styled(FullWidthPanel)`
  padding-top: 6px;
  padding-bottom: 20px;
`

export const CourseCompletionLabel = Label.extend`
  width: 85%;
  margin-right: 2em;
`

export const DependentCourseLabel = Label.extend`
  width: 45%;
  margin-right: 2em;
`

export const FormContainer = styled.div`
  padding: 14px;
  background: #fbfbfb;

  @media screen and (min-width: 768px) {
    padding: 15px;
  }
`

export const FormGroupDropdown = FormGroup.extend`
  flex: 1;
  margin-right: 0.6em;

  .Select-control {
    height: 40px;
  }
`
