import React, { Component } from "react"
import styled from "styled-components"
import Dropzone from "react-dropzone"

import ButtonUpload from "base_components/ButtonUpload"
import FileChooser from "base_components/FileChooser"
import { FormGroup } from "base_components/RootForm"
import Video from "base_components/Video"

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

class VideoChooser extends Component {
  handleVideoChange = ([video]) => {
    if (video) {
      this.props.onChoose(video)
    }
  }

  handleButtonUploadClick = () => {
    this.videoRef.open()
  }

  render() {
    const { video } = this.props

    return (
      <React.Fragment>
        <FormGroup>
          <div>
            <ButtonUpload onClick={this.handleButtonUploadClick} />
            <FileChooser
              accept="video/*"
              ref={input => {
                this.videoRef = input
              }}
              onChooseFiles={this.handleVideoChange}
            />
          </div>
        </FormGroup>
        <FormGroup>
          {video ? (
            <Video url={URL.createObjectURL(video)} />
          ) : (
            <StyledDropzone
              accept="video/*"
              disableClick
              multiple={false}
              onDrop={this.handleVideoChange}
            >
              <h5>Drag file here</h5>
              <h5>(mp4, mov, avi)</h5>
            </StyledDropzone>
          )}
        </FormGroup>
      </React.Fragment>
    )
  }
}

export default VideoChooser
