import React, { Component } from "react"
import joi from "joi"
import styled from "styled-components"

import ButtonUpload from "base_components/ButtonUpload"
import FileChooser from "base_components/FileChooser"
import { Label, Text, FormGroup } from "base_components/RootForm"

import { openFileChooser } from "utils/formFunctions"

import Dropzone from "react-dropzone"

const Root = styled.div`
  padding-bottom: 18px;
`

const StyledDropzone = styled(Dropzone)`
  background-color: #f3f3f3;
  border: 2px solid #ddd;
  border-radius: 13px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 130px;

  h5 {
    font-size: 14px;
    margin: 0;
    color: #888;
    text-transform: uppercase;
    font-weight: 600;
  }
`

const validationSchema = joi.object().keys({
  title: joi
    .string()
    .required()
    .label("Video name is missing")
})

class CreateVideoForm extends Component {
  handleSelectFile = file => {
    const { onChange } = this.props

    onChange(file, "file")
    if (file) {
      onChange(file.name, "title")
    }
  }

  render() {
    const {
      onChange,
      fields: { title }
    } = this.props

    return (
      <Root>
        <FormGroup>
          <div>
            <ButtonUpload onClick={e => openFileChooser(e, this.videoRef)} />
            <FileChooser
              accept="video/*"
              ref={input => {
                this.videoRef = input
              }}
              onChooseFiles={([file]) => this.handleSelectFile(file)}
            />
          </div>
        </FormGroup>
        <FormGroup>
          <StyledDropzone
            accept="video/*"
            disableClick
            multiple={false}
            onDrop={([file]) => this.handleSelectFile(file)}
          >
            <h5>Drag file here</h5>
            <h5>(mp4, mov, avi)</h5>
          </StyledDropzone>
        </FormGroup>

        <FormGroup>
          <Label>Video name</Label>
          <Text
            value={title}
            onChange={e => onChange(e.target.value, "title")}
            placeholder="Video name"
          />
        </FormGroup>
      </Root>
    )
  }
}

export { CreateVideoForm as default, validationSchema }
