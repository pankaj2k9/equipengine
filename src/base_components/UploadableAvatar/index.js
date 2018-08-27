import React, { Fragment } from "react"
import styled from "styled-components"

import UserAvatar from "base_components/UserAvatar"
import FileChooser from "base_components/FileChooser"

// TODO probably move as a separate github library
class UploadableAvatar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: props.image
    }
  }

  handleUploadButtonClick = () => this.fileChooserDialog.open()

  handleChooseFilesButtonClick = files => {
    const reader = new window.FileReader()
    const file = files[0]

    reader.onloadend = () => {
      this.setState({
        image: reader.result
      })
    }

    reader.readAsDataURL(file)
  }

  render() {
    const { className, readOnly, size } = this.props
    const { image } = this.state

    return (
      <button
        className={className}
        onClick={!readOnly && this.handleUploadButtonClick}
      >
        {/* Image preview */}
        <UserAvatar image={image} size={size} />

        {!readOnly && (
          <Fragment>
            <span className="centered">Upload</span>
            <FileChooser
              accept="image/*"
              onChooseFiles={this.handleChooseFilesButtonClick}
              ref={input => {
                this.fileChooserDialog = input
              }}
            />
          </Fragment>
        )}
      </button>
    )
  }
}

export default styled(UploadableAvatar)`
  width: 98px;
  height: 98px;
  padding: 0;
  margin-right: 1.2em;
  border: unset;
  border-radius: 50%;

  position: relative;
  text-align: center;
  color: white;
  transition: 0.5s;
  cursor: default;

  ${props =>
    !props.readOnly &&
    `
      &:hover {
        cursor: pointer;
        background-color: black;
        z-index: 10;
        color: white;

        > img {
          z-index: 5;
          opacity: 0.5;
        }
      }
    `} img {
    width: 98px;
    height: 98px;
    transition: 0.3s;
  }

  .centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
