import React, { Component } from "react"
import styled from "styled-components"
import moment from "moment"

import Breadcrumbs from "base_components/Breadcrumbs"
import { MainInnerContainer, MainLeft, MainRight } from "base_components/Main"
import TableFiles from "base_components/TableFiles"
import SearchBar from "base_components/RootSearchBar"
import Button from "base_components/RootButton"
import FileChooser from "base_components/FileChooser"

import iconUpload from "./iconUpload.svg"

// ----------- for button component ------------
const ButtonUpload = Button.extend`
  width: 100%;
  margin-bottom: 1.2em;
  background-color: #d8d8d8;
`

const SpanButtonUpload = styled.span`
  margin-right: 0.8em;
  display: inline-block;
`

// test data
const files = [
  {
    id: "ysdjfk",
    title: "Submissions instructions.pdf",
    date: "22 April 17"
  },
  {
    id: "yskjdksf",
    title: "Showing culture.ptt",
    date: "19 March 17"
  }
]

class TeacherFiles extends Component {
  state = {
    files,
    uploadFile: undefined
  }

  handleUploadButtonClick = () => this.fileChooserDialog.open()

  handleChooseFilesButtonClick = files => {
    const reader = new FileReader()
    const file = files[0]

    this.setState({
      files: [
        ...this.state.files,
        {
          title: file.name,
          date: moment().format("DD MMM YY"),
          id: Math.random()
        }
      ]
    })

    reader.onloadend = () => {
      this.setState({
        file: reader.result
      })
    }

    reader.readAsDataURL(file)
  }

  handleRemoveFileClick = rowId => {
    this.setState({
      files: this.state.files.filter(file => file.id !== rowId)
    })
  }

  render() {
    return (
      <div>
        <Breadcrumbs
          items={[
            {
              to: "/secure/teacher-files",
              label: "Files"
            }
          ]}
        />
        <MainInnerContainer>
          <MainLeft>
            <TableFiles
              files={this.state.files}
              removeFile={this.handleRemoveFileClick}
            />
          </MainLeft>
          <MainRight>
            <ButtonUpload secondary onClick={this.handleUploadButtonClick}>
              <SpanButtonUpload>Upload File</SpanButtonUpload>
              <img alt="Upload icon" src={iconUpload} />
              <FileChooser
                accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf"
                onChooseFiles={this.handleChooseFilesButtonClick}
                ref={input => {
                  this.fileChooserDialog = input
                }}
              />
            </ButtonUpload>
            <SearchBar placeholder="Search files" />
          </MainRight>
        </MainInnerContainer>
      </div>
    )
  }
}

export default TeacherFiles
