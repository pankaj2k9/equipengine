import React from 'react'
import styled from 'styled-components'

import UserAvatar from 'base_components/UserAvatar'
import FileChooser from 'base_components/FileChooser'

class UploadableAvatar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      image: props.image
    }
  }

  handleUploadButtonClick = () => this.fileChooserDialog.open();

  handleChooseFilesButtonClick = (files) => {
    const reader = new window.FileReader()
    const file = files[0]

    reader.onloadend = () => {
      this.setState({
        image: reader.result
      })
    }

    reader.readAsDataURL(file)
  }

  render () {
    const { className, small } = this.props
    const { image } = this.state
    return (
      <div className={className} onClick={this.handleUploadButtonClick}>
        {/* Image preview */}
        <UserAvatar image={image} small={small} />

        {/* Text on image */}
        <span className='centered'>Upload</span>

        {/* Browser file chooser, not visible by default */}
        <FileChooser
          accept='image/*'
          onChooseFiles={this.handleChooseFilesButtonClick}
          ref={(input) => { this.fileChooserDialog = input }}
        />
      </div>
    )
  }
}

export default styled(UploadableAvatar)`
  width: 98px;
  height: 98px;
  border-radius: 50%;
  transition: 0.5s;

  margin-right: 1.2em;
  position: relative;
  text-align: center;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: black;
    z-index: 10;
    color: white;
  }

  &:hover > img {
    z-index: 5;
    opacity: 0.5;
  }

  img {
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
