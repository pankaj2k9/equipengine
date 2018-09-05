import React, { Component } from "react"
import joi from "joi"
import styled from "styled-components"

import { Label, Text, FormGroup } from "base_components/RootForm"
import VideoChooser from "base_components/VideoChooser"

const Root = styled.div`
  padding-bottom: 18px;
`

const validationSchema = joi.object().keys({
  title: joi
    .string()
    .required()
    .label("Video name is missing")
})

class CreateVideoForm extends Component {
  handleVideoChange = file => {
    this.props.onChange(file, "file")
    if (file) {
      this.props.onChange(file.name, "title")
    }
  }

  handleChange = event => {
    this.props.onChange(event.target.value, event.target.name)
  }

  render() {
    const {
      fields: { file, title }
    } = this.props

    return (
      <Root>
        <VideoChooser video={file} onChoose={this.handleVideoChange} />
        <FormGroup>
          <Label>Video name</Label>
          <Text
            name="title"
            value={title}
            onChange={this.handleChange}
            placeholder="Video name"
          />
        </FormGroup>
      </Root>
    )
  }
}

export { CreateVideoForm as default, validationSchema }
