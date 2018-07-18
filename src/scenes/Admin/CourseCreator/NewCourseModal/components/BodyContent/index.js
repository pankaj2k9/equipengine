import React from "react"
import styled from "styled-components"
//
import { Label, Text, TextArea, FormGroup } from "base_components/RootForm"
import ButtonUpload from "base_components/ButtonUpload"
import FileChooser from "base_components/FileChooser"

import form from "hoc/form"

import { openFileChooser } from "utils/formFunctions"

const ContainerBodyContent = styled.div`
  padding-bottom: 18px;
`

const BodyContent = ({
  fields: { name, description },
  refs: { mainImageRef, courseImageRef },
  onChange
}) => (
  <ContainerBodyContent>
    <FormGroup>
      <Label>Course Name &#42;</Label>
      <Text
        value={name}
        onChange={e => onChange(e.target.value, "name")}
        placeholder="Communication and culture"
      />
    </FormGroup>
    <FormGroup>
      <Label>Course Description</Label>
      <TextArea
        value={description}
        onChange={e => onChange(e.target.value, "description")}
        placeholder="Communication and culture is focused on those who want to serve in their local community."
        row={7}
      />
    </FormGroup>
    <FormGroup>
      <Label>Course Main Image</Label>
      <div>
        <ButtonUpload onClick={e => openFileChooser(e, mainImageRef)} />
        <FileChooser
          onChooseFiles={([file]) => onChange(file, "mainImage")}
          ref={mainImageRef}
        />
      </div>
    </FormGroup>
    <FormGroup>
      <Label>Course Banner Image</Label>
      <div>
        <ButtonUpload onClick={e => openFileChooser(e, courseImageRef)} />
        <FileChooser
          onChooseFiles={([file]) => onChange(file, "courseImage")}
          ref={courseImageRef}
        />
      </div>
    </FormGroup>
  </ContainerBodyContent>
)

export default form(
  {
    name: "",
    description: "",
    mainImage: null,
    courseImage: null
  },
  ["mainImageRef", "courseImageRef"]
)(BodyContent)
