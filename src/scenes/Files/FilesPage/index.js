import React from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { createStructuredSelector } from "reselect"
import { bindActionCreators } from "redux"
import InfiniteScroll from "react-infinite-scroller"
import moment from "moment"

import Breadcrumbs from "base_components/Breadcrumbs"
import FileChooser from "base_components/FileChooser"
import Loading from "base_components/Loading"
import { MainInnerContainer, MainLeft, MainRight } from "base_components/Main"
import TableFiles from "base_components/TableFiles"
import SearchBar from "base_components/RootSearchBar"
import features from "features"
import { TEACHER_ROLE } from "services/constants"

import { UploadButton, UploadButtonSpan } from "./elements"
import { selectors } from "../ducks"
import { fetchAttachments, deleteAttachment } from "../thunks"
import iconUpload from "./iconUpload.svg"

class Files extends React.Component {
  state = {
    isFirstRequest: true
  }

  isTeacher = () => {
    const { role } = this.props

    return role === TEACHER_ROLE
  }

  handleSearch = ({ target: { value } }) => {
    const { fetchAttachments, match, pagination } = this.props

    fetchAttachments({
      attachmentable_id: match.params.groupId,
      pagination,
      term: value
    })
  }

  handleLoadMore = page => {
    const { fetchAttachments, match, pagination, term } = this.props

    fetchAttachments({
      attachmentable_id: match.params.groupId,
      pagination: { ...pagination, current_page: page },
      term
    })

    this.setState({ isFirstRequest: false })
  }

  handleRemoveFile = id => {
    const { match, deleteAttachment } = this.props

    deleteAttachment({ attachmentable_id: match.params.groupId, id })
  }

  render() {
    const { isFetchingAttachments, pagination } = this.props
    const { isFirstRequest } = this.state

    return (
      <div>
        <Breadcrumbs
          items={[
            {
              // TODO change to /secure/groupId/files if it makes sense
              to: "/secure/files",
              label: "Files"
            }
          ]}
        />
        <MainInnerContainer>
          <MainLeft>
            {isFetchingAttachments ? (
              <Loading />
            ) : (
              <InfiniteScroll
                pageStart={0}
                loadMore={this.handleLoadMore}
                hasMore={
                  (pagination &&
                    pagination.total_pages > pagination.current_page) ||
                  isFirstRequest
                }
                initialLoad
              >
                <TableFiles
                  files={Array.from(
                    this.props.attachments.map(file => {
                      return {
                        id: file.id,
                        title: file.title,
                        date: moment(file.updated_at).format("LLL")
                      }
                    })
                  )}
                  removeFile={id =>
                    this.isTeacher() && this.handleRemoveFile(id)
                  }
                />
                {isFetchingAttachments && <Loading />}
              </InfiniteScroll>
            )}
          </MainLeft>
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
              placeholder="Search files"
              onChange={this.handleSearch}
            />
          </MainRight>
        </MainInnerContainer>
      </div>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    role: features.login.selectors.selectCurrentUserRole(),
    isFetchingAttachments: selectors.selectIsFetchingAttachments(),
    attachments: selectors.selectAttachments(),
    pagination: selectors.selectPagination(),
    term: selectors.selectTerm()
  })

const mapDispatch = dispatch =>
  bindActionCreators({ fetchAttachments, deleteAttachment }, dispatch)

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Files)
)
