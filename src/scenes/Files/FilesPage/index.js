import React from "react"

import Breadcrumbs from "base_components/Breadcrumbs"
import { MainInnerContainer, MainLeft, MainRight } from "base_components/Main"
import TableFiles from "base_components/TableFiles"
import SearchBar from "base_components/RootSearchBar"

import { connect } from "react-redux"
import { withRouter } from "react-router"
import { createStructuredSelector } from "reselect"
import { bindActionCreators } from "redux"
import { selectors } from "../ducks"
import { fetchFiles, fetchMoreGroupFiles } from "../thunks"

import InfiniteScroll from "react-infinite-scroller"

import moment from "moment"

import Loading from "base_components/Loading"

class Files extends React.Component {
  componentDidMount() {
    this.props.fetchFiles({
      attachmentable_id: this.props.match.params.groupId
    })
  }

  handleSearch = ({ target: { value } }) => {
    this.props.fetchFiles({
      attachmentable_id: this.props.match.params.groupId,
      term: value
    })
  }

  loadMore = page => {
    const { fetchMoreGroupFiles, searchTerm } = this.props
    fetchMoreGroupFiles({
      attachmentable_id: this.props.match.params.groupId,
      term: searchTerm,
      pagination: page
    })
  }
  render() {
    const { isFetchingFiles, isFetchingMoreFiles, pagination } = this.props
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
            {isFetchingFiles ? (
              <Loading />
            ) : (
              <InfiniteScroll
                pageStart={1}
                loadMore={this.loadMore}
                hasMore={
                  pagination && pagination.total_pages > pagination.current_page
                }
                initialLoad={true}
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
                />
                {isFetchingMoreFiles ? <Loading /> : ""}
              </InfiniteScroll>
            )}
          </MainLeft>
          <MainRight>
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
    isFetchingMoreFiles: selectors.selectIsFetchingMoreFiles(),
    isFetchingFiles: selectors.selectIsFetchingFiles(),
    attachments: selectors.selectAttachments(),
    pagination: selectors.selectPagination(),
    searchTerm: selectors.selectSearchTerm()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchFiles,
      fetchMoreGroupFiles
    },
    dispatch
  )

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Files)
)
