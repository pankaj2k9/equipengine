import moment from "moment"
import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { createStructuredSelector } from "reselect"
import { bindActionCreators } from "redux"

import Breadcrumbs from "base_components/Breadcrumbs"
import { MainRight } from "base_components/Main"
import SearchBar from "base_components/RootSearchBar"
import TableFiles from "base_components/TableFiles"
import FileChooser from "base_components/FileChooser"
import features from "features"
import { TEACHER_ROLE } from "services/constants"

import { Container, Left, UploadButton, UploadButtonSpan } from "./elements"
import iconUpload from "./iconUpload.svg"
import { selectors } from "../ducks"
import { fetchFiles } from "../thunks"

class Files extends Component {
  state = {
    files: [],
    uploadFile: undefined
  }

  componentDidMount() {
    this.props.fetchFiles({
      attachmentable_id: this.props.match.params.groupId
    })
  }

  isTeacher = () => {
    const { role } = this.props

    return role === TEACHER_ROLE
  }

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

  handleSearch = ({ target: { value } }) => {
    this.props.fetchFiles({
      attachmentable_id: this.props.match.params.groupId,
      term: value
    })
  }

  handleUploadButtonClick = () => this.fileChooserDialog.open()

  render() {
    const { attachments } = this.props

    return (
      <Fragment>
        <Breadcrumbs
          items={[
            {
              // TODO change to /secure/groupId/files if it makes sense
              to: "/secure/files",
              label: "Files"
            }
          ]}
        />

        <Container>
          <Left>
            <TableFiles
              files={attachments.map(file => ({
                id: file.id,
                title: file.title,
                date: file.updated_at
              }))}
              tableLayout="unset"
              removeFile={this.isTeacher() && this.handleRemoveFileClick}
            />
          </Left>

          <MainRight>
            {this.isTeacher() && (
              <UploadButton secondary onClick={this.handleUploadButtonClick}>
                <UploadButtonSpan>Upload File</UploadButtonSpan>
                <img alt="Upload icon" src={iconUpload} />
                <FileChooser
                  accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf"
                  onChooseFiles={this.handleChooseFilesButtonClick}
                  ref={input => {
                    this.fileChooserDialog = input
                  }}
                />
              </UploadButton>
            )}
            <SearchBar
              onChange={this.handleSearch}
              placeholder="Search files"
            />
          </MainRight>
        </Container>
      </Fragment>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    role: features.login.selectors.selectCurrentUserRole(),
    isFetchingFiles: selectors.selectIsFetchingFiles(),
    attachments: selectors.selectAttachments(),
    pagination: selectors.selectPagination()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchFiles
    },
    dispatch
  )

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Files)
)
