import React from "react"

import { FormGroup, Text, TextArea, Label } from "base_components/RootForm"

import { Root } from "./elements"

const GeneralGroupInfo = ({ title, description, onChange }) => (
  <Root title="General Information">
    <FormGroup>
      <Label htmlFor="title">
        Group Name
        <sup>*</sup>
      </Label>
      <Text
        id="title"
        name="title"
        onChange={onChange}
        placeholder="Connect: Level 1"
        value={title}
      />
    </FormGroup>

    <FormGroup>
      <Label htmlFor="description">Group Description</Label>
      <TextArea
        id="description"
        name="description"
        onChange={onChange}
        placeholder="Connect: Level 1"
        row={4}
        value={description}
      />
    </FormGroup>
  </Root>
)

export default GeneralGroupInfo
