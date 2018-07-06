import React from "react"
import styled from "styled-components"
//
import { Label, Text, TextArea, FormGroup } from "base_components/RootForm"
import ButtonUpload from "base_components/ButtonUpload"

const ContainerBodyContent = styled.div`
  padding-bottom: 18px;
`

const BodyContent = () => (
  <ContainerBodyContent>
    <FormGroup>
      <Label>Course Name &#42;</Label>
      <Text name="course" placeholder="Communication and culture" />
    </FormGroup>
    <FormGroup>
      <Label>Course Description</Label>
      <TextArea
        name="description"
        placeholder="Communication and culture is focused on those who want to serve in their local community."
        row={7}
      />
    </FormGroup>
    <FormGroup>
      <Label>Course Main Image</Label>
      <div>
        <ButtonUpload />
      </div>
    </FormGroup>
    <FormGroup>
      <Label>Course Banner Image</Label>
      <div>
        <ButtonUpload />
      </div>
    </FormGroup>
  </ContainerBodyContent>
)

export default BodyContent
