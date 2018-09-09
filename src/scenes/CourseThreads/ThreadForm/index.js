import React from "react"
import joi from "joi"

import { Label, Text } from "base_components/RootForm"

import { StyledFormGroup, Root } from "./elements"

const validationSchema = joi.object().keys({
  name: joi
    .string()
    .required()
    .label("Thread name is required")
})

const ThreadForm = ({ fields: { name }, onChange }) => (
  <Root>
    <StyledFormGroup>
      <Label>Thread Name*</Label>
      <Text
        value={name}
        onChange={event => onChange(event.target.value, "name")}
      />
    </StyledFormGroup>
  </Root>
)

export { ThreadForm as default, validationSchema }
