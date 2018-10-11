import styled from "styled-components"
import { Label, FormGroup } from "base_components/RootForm"
import { FullWidthPanel } from "../elements"

export const Root = styled(FullWidthPanel)`
  padding-top: 20px;
  padding-bottom: 20px;
`

export const LessonCompleteLabel = Label.extend`
  width: 45%;
  margin-right: 2em;
`

export const FormGroupSetLesson = FormGroup.extend`
  display: flex;
  margin-bottom: 0;
  margin-right: 1.5em;

  &:last-child {
    margin-right: 0;
  }

  > div {
    margin-right: 0.5em;
  }
`
