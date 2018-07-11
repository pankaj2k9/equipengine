import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
//
import Loading from "base_components/Loading"
import ListGroups from "../ListGroups"
import { selectors, thunks } from "global/MyGroups"
import UnderlinedTitle from "base_components/UnderlinedTitle"

class MyGroups extends Component {
  componentDidMount() {
    this.props.fetchGroups()
  }

  render() {
    const { isFetchingGroups, groups } = this.props

    return (
      <div>
        <UnderlinedTitle>Your groups</UnderlinedTitle>
        {isFetchingGroups ? <Loading /> : <ListGroups groups={groups} />}
      </div>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    groups: selectors.selectMyGroups(),
    isFetchingGroups: selectors.selectIsFetchingMyGroups()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchGroups: thunks.fetchMyGroups
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(MyGroups)
