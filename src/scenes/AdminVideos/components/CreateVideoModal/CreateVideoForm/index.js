import React, { Component } from "react"
import joi from "joi"
import styled from "styled-components"
import Dropzone from "react-dropzone"

import ButtonUpload from "base_components/ButtonUpload"
import FileChooser from "base_components/FileChooser"
import { Label, Text, FormGroup } from "base_components/RootForm"
import Video from "base_components/Video"
import { openFileChooser } from "utils/formFunctions"

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
  handleFileChange = ([file]) => {
    const { onChange } = this.props
    onChange(file, "file")

    if (file) {
      onChange(file.name, "title")

      const fileUrl = URL.createObjectURL(file)
      onChange(fileUrl, "fileUrl")
    }
  }

  handleChange = event => {
    const { onChange } = this.props

    onChange(event.target.value, event.target.name)
  }

  handleButtonUploadClick = event => openFileChooser(event, this.videoRef)

  render() {
    const {
      fields: { fileUrl, title }
    } = this.props

    return (
      <Root>
        <FormGroup>
          <div>
            <ButtonUpload onClick={this.handleButtonUploadClick} />
            <FileChooser
              accept="video/*"
              ref={input => {
                this.videoRef = input
              }}
              onChooseFiles={this.handleFileChange}
            />
          </div>
        </FormGroup>
        <FormGroup>
          {fileUrl ? (
            <Video url={fileUrl} onProgress={() => {}} />
          ) : (
            <StyledDropzone
              accept="video/*"
              disableClick
              multiple={false}
              onDrop={this.handleFileChange}
            >
              <h5>Drag file here</h5>
              <h5>(mp4, mov, avi)</h5>
            </StyledDropzone>
          )}
        </FormGroup>

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
