import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { createStructuredSelector } from "reselect"
import { bindActionCreators } from "redux"

import Breadcrumbs from "base_components/Breadcrumbs"
import { MainRight } from "base_components/Main"
import SearchBar from "base_components/RootSearchBar"
import TableFiles from "base_components/TableFiles"

import { Container, Left } from "./elements"
import { selectors } from "../ducks"
import { fetchFiles } from "../thunks"

class Files extends Component {
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
            />
          </Left>

          <MainRight>
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
