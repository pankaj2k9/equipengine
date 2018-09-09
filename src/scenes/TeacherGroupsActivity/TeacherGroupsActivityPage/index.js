import React, { Component } from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router"
import { compose } from "recompose"
import { bindActionCreators } from "redux"
import { createStructuredSelector } from "reselect"

import modal from "hoc/modal"

import { selectors } from "../ducks"
import { Container } from "./elements"
import SearchBarTableGroups from "../SearchBarTableGroups"
import TableTeacherGroupsActivity from "../TableTeacherGroupsActivity"
import ThreadModal from "../ThreadModal"
import { fetchGroupActivities } from "../thunks"

class TeacherGroupsActivity extends Component {
  componentDidMount() {
    const { fetchGroupActivities, match, pagination } = this.props

    fetchGroupActivities({ notifiable_id: match.params.groupId, pagination })
  }

  handleSelectThread = id => {}

  render() {
    const { activities, isOpen, onClose, thread } = this.props

    return (
      <Container>
        <SearchBarTableGroups />

        <TableTeacherGroupsActivity
          activities={activities}
          onSelect={this.handleSelectThread}
        />

        <ThreadModal isOpen={isOpen} onClose={onClose} thread={thread} />
      </Container>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    activities: selectors.selectGroupActivities()
  })

const mapDispatch = dispatch =>
  bindActionCreators({ fetchGroupActivities }, dispatch)

export default compose(
  withRouter,
  modal,
  connect(
    mapState,
    mapDispatch
  )
)(TeacherGroupsActivity)
