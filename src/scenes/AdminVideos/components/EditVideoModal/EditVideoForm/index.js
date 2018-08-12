import React from "react"
import joi from "joi"
import styled from "styled-components"

import Video from "base_components/Video"
import { Label, Text, FormGroup } from "base_components/RootForm"

const Root = styled.div`
  padding-bottom: 18px;
`

const validationSchema = joi.object().keys({
  title: joi
    .string()
    .required()
    .label("Video name is missing")
})

const CreateVideoForm = ({ fields: { title }, onChange }) => (
  <Root>
    <FormGroup>
      <Label>Video name</Label>
      <Text
        value={title}
        onChange={e => onChange(e.target.value, "title")}
        placeholder="Video name"
      />
    </FormGroup>

    <FormGroup>
      <Video
        url="https://www.youtube.com/watch?v=Yw6u6YkTgQ4"
        onProgress={() => {}}
      />
    </FormGroup>
  </Root>
)

export { CreateVideoForm as default, validationSchema }
