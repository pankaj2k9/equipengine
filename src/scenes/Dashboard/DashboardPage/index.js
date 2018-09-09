import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "recompose"
import { bindActionCreators } from "redux"

import { Container } from "./elements"
import { fetchComments } from "../thunks"
import NoticeboardDashboard from "../NoticeboardDashboard"
import ReportDashboard from "../ReportDashboard"

class Dashboard extends Component {
  componentDidMount() {
    const { fetchComments, match, pagination } = this.props

    fetchComments({
      commentable_id: match.params.groupId,
      pagination
    })
  }

  render() {
    return (
      <Container>
        <NoticeboardDashboard />
        <ReportDashboard />
      </Container>
    )
  }
}

const mapDispatch = dispatch => bindActionCreators({ fetchComments }, dispatch)

export default compose(
  withRouter,
  connect(
    null,
    mapDispatch
  )
)(Dashboard)
