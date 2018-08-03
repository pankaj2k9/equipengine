import React from "react"
import { bindActionCreators } from "redux"
import { compose, lifecycle, pure } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"

import { fetchGroupUsers } from "../thunks"
import { selectors } from "../ducks"

// for Tab Component
import { Tab } from "react-bootstrap"
import Tabs from "base_components/Tabs"
import Loading from "base_components/Loading"

// other components.
import TabUser from "../TabUser"

const TabsUsers = ({
  className,
  isFetchingUsers,
  allUsers,
  studentUsers,
  teacherUsers
}) => (
  <div>
    {isFetchingUsers ? (
      <Loading />
    ) : (
      <Tabs>
        <Tab eventKey={1} title="All">
          <TabUser students={allUsers} />
        </Tab>
        <Tab eventKey={2} title="Students">
          <TabUser students={studentUsers} />
        </Tab>
        <Tab eventKey={3} title="Teachers/Facilitator">
          <TabUser students={teacherUsers} />
        </Tab>
      </Tabs>
    )}
  </div>
)

const mapState = () =>
  createStructuredSelector({
    allUsers: selectors.selectGroupUsers(),
    studentUsers: selectors.selectGroupStudents(),
    teacherUsers: selectors.selectGroupTeachers(),
    isFetchingUsers: selectors.selectIsFetchingGroupUsers()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchGroupUsers
    },
    dispatch
  )

export default compose(
  withRouter,
  component =>
    connect(
      mapState,
      mapDispatch
    )(component),
  lifecycle({
    componentDidMount() {
      if (!this.props.users || this.props.users.length === 0) {
        this.props.fetchGroupUsers({
          groupId: this.props.match.params.groupId
        })
      }
    }
  }),
  pure
)(TabsUsers)
