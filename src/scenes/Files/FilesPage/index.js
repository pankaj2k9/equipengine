import React from "react"

import Breadcrumbs from "base_components/Breadcrumbs"
import { MainRight } from "base_components/Main"
import TableFiles from "base_components/TableFiles"
import SearchBar from "base_components/RootSearchBar"

import { connect } from "react-redux"
import { withRouter } from "react-router"
import { createStructuredSelector } from "reselect"
import { bindActionCreators } from "redux"
import { Container, Left } from "./elements"
import { selectors } from "../ducks"
import { fetchFiles } from "../thunks"

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

class Files extends React.Component {
  componentDidMount() {
    this.props.fetchFiles({
      attachmentable_id: this.props.match.params.groupId
    })
  }

  render() {
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
        <Container>
          <Left>
            <TableFiles
              // Remove ternary after adding files in production
              files={
                this.props.attachments.length > 0
                  ? this.props.attachments.map(file => {
                      return {
                        id: file.id,
                        title: file.title,
                        date: file.updated_at
                      }
                    })
                  : files
              }
            />
          </Left>
          <MainRight>
            <SearchBar placeholder="Search files" />
          </MainRight>
        </Container>
      </div>
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
