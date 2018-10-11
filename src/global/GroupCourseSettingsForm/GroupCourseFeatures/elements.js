import styled from "styled-components"
import { Label } from "base_components/RootForm"
import { FullWidthPanel } from "../elements"

export const Root = styled(FullWidthPanel)`
  padding-top: 20px;
  padding-bottom: 20px;
`

export const CourseFilesLabel = Label.extend`
  width: 85%;
  margin-right: 2em;
`

export const CourseDiscussionLabel = Label.extend`
  width: 85%;
  margin-right: 2em;
`

export const StudentContentLabel = Label.extend`
  width: 85%;
  margin-right: 2em;
`

export const FormContainer = styled.div`
  padding: 14px;
  background: #fbfbfb;

  @media screen and (min-width: 768px) {
    padding: 15px;
  }
`
