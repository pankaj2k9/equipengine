import React from "react"
import joi from "joi"
//
import { FormGroup, Label, Text } from "base_components/RootForm"

const validationSchema = joi.object().keys({
  title: joi
    .string()
    .required()
    .label("Title is required")
})

const TutorialForm = ({ fields: { title, description }, onChange }) => (
  <div>
    <FormGroup>
      <Label>Title*</Label>
      <Text value={title} onChange={e => onChange(e.target.value, "title")} />
    </FormGroup>
    <FormGroup>
      <Label>Description*</Label>
      <Text
        value={description}
        onChange={e => onChange(e.target.value, "description")}
      />
    </FormGroup>
  </div>
)

export { TutorialForm as default, validationSchema }
