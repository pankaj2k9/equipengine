import React from "react"
import joi from "joi"
//
import { Label, NumberInput, Text, Switch } from "base_components/RootForm"
import { StyledFormGroup, Root } from "./elements"

const validationSchema = joi.object().keys({
  title: joi
    .string()
    .required()
    .label("Title is required")
})

const GroupForm = ({
  fields: {
    title,
    userLimit,
    enabled,
    noticeboardEnabled,
    studentCanComment,
    studentCanPost
  },
  onChange
}) => (
  <Root>
    <StyledFormGroup>
      <Label>Group Name</Label>
      <Text value={title} onChange={e => onChange(e.target.value, "title")} />
    </StyledFormGroup>
    <StyledFormGroup>
      <Label>User limit</Label>
      <NumberInput
        value={userLimit}
        onChange={v => onChange(v, "userLimit")}
        min={0}
        max={500}
      />
    </StyledFormGroup>
    <StyledFormGroup>
      <Label>Status</Label>
      <Switch
        value={enabled}
        onChange={e => onChange(e.target.checked, "enabled")}
      />
    </StyledFormGroup>
    <StyledFormGroup>
      <Label>Noticeboard</Label>
      <Switch
        value={noticeboardEnabled}
        onChange={e => onChange(e.target.checked, "noticeboardEnabled")}
      />
    </StyledFormGroup>
    <StyledFormGroup>
      <Label>Student Can Post</Label>
      <Switch
        value={studentCanPost}
        onChange={e => onChange(e.target.checked, "studentCanPost")}
      />
    </StyledFormGroup>
    <StyledFormGroup>
      <Label>Student Can Comment</Label>
      <Switch
        value={studentCanComment}
        onChange={e => onChange(e.target.checked, "studentCanComment")}
      />
    </StyledFormGroup>
  </Root>
)

export { GroupForm as default, validationSchema }
