import React, { Component, Fragment } from "react"
import { bindActionCreators } from "redux"
import { compose, withState } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"

import { actions } from "../ducks"
import BorderedTitle from "base_components/BorderedTitle"
import features from "features"
import SearchActionBar from "base_components/SearchActionBar"
import { selectors } from "../selectors"
import { STUDENT_ROLE } from "services/constants"
import StudentContentTabs from "../StudentContentTabs"
import StudentItemFormatter from "../StudentItemFormatter"
import VerticalTabs from "base_components/VerticalTabs"

class StudentsPage extends Component {
  componentDidMount() {
    this.props.fetchStudents({ groupId: this.props.groupId })
  }

  handleTabClick = user => {
    this.props.selectUser({ userId: user.id })
  }

  handleSearchUsers = ({ term }) => {
    this.props.fetchStudents({
      term,
      groupId: this.props.groupId
    })
  }

  render() {
    const { students, selectedUser, isFetchingStudents } = this.props

    return (
      <Fragment>
        <BorderedTitle title="Students Manager" />
        <VerticalTabs
          tabs={students}
          tabFormatter={tab => <StudentItemFormatter user={tab} />}
          loading={isFetchingStudents}
          selectedTab={selectedUser && selectedUser.id}
          actionBar={<SearchActionBar onSearch={this.handleSearchUsers} />}
          content={selectedUser && <StudentContentTabs />}
          onTabClick={this.handleTabClick}
        />
      </Fragment>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    students: features.groupUsers.selectors.selectGroupUsers(),
    isFetchingStudents: features.groupUsers.selectors.selectIsFetchingGroupUsers(),
    selectedUser: selectors.selectSelectedUser()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchStudents: ({ ...rest }) =>
        features.groupUsers.actions.fetchGroupUsers({
          role: STUDENT_ROLE,
          ...rest
        }),
      selectUser: actions.selectUser
    },
    dispatch
  )

export default compose(
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  withRouter,
  withState("groupId", null, props => props.match.params.groupId)
)(StudentsPage)
