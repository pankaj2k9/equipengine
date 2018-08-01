import React from "react"
import joi from "joi"

import { Label, Text, TextArea } from "base_components/RootForm"

import { StyledFormGroup, Root } from "./elements"

const validationSchema = joi.object().keys({
  name: joi
    .string()
    .required()
    .label("Thread name is required"),

  content: joi
    .string()
    .required()
    .label("Post content is required")
})

const ThreadForm = ({ fields: { name, content }, onChange }) => (
  <Root>
    <StyledFormGroup>
      <Label>Thread Name*</Label>
      <Text
        value={name}
        onChange={event => onChange(event.target.value, "name")}
      />
    </StyledFormGroup>

    <StyledFormGroup>
      <Label>Post content*</Label>
      <TextArea
        value={content}
        onChange={event => onChange(event.target.value, "content")}
      />
    </StyledFormGroup>
  </Root>
)

export { ThreadForm as default, validationSchema }
