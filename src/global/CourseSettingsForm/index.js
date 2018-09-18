import React from "react"
import joi from "joi"
import styled from "styled-components"
//
import { Label, Text, TextArea, FormGroup } from "base_components/RootForm"
import ButtonUpload from "base_components/ButtonUpload"
import FileChooser from "base_components/FileChooser"
import { openFileChooser } from "utils/formFunctions"

const Root = styled.div`
  padding-bottom: 18px;
`

const validationSchema = joi.object().keys({
  title: joi
    .string()
    .required()
    .label("Course Name is missing")
})

const CourseSettingsForm = ({ fields: { title, description }, onChange }) => (
  <Root>
    <FormGroup>
      <Label>Course Name*</Label>
      <Text
        value={title}
        onChange={e => onChange(e.target.value, "title")}
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
        <ButtonUpload onClick={e => openFileChooser(e, this.mainImageRef)} />
        <FileChooser
          ref={input => {
            this.mainImageRef = input
          }}
          onChooseFiles={([file]) => onChange(file, "mainImage")}
        />
      </div>
    </FormGroup>
    <FormGroup>
      <Label>Course Banner Image</Label>
      <div>
        <ButtonUpload onClick={e => openFileChooser(e, this.courseImageRef)} />
        <FileChooser
          onChooseFiles={([file]) => onChange(file, "courseImage")}
          ref={input => {
            this.courseImageRef = input
          }}
        />
      </div>
    </FormGroup>
  </Root>
)

export { CourseSettingsForm as default, validationSchema }
