import React, { Component } from "react"
import styled from "styled-components"
import { withRouter } from "react-router-dom"
import { bindActionCreators } from "redux"
import { compose, pure } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import { MainRight } from "base_components/Main"
import SearchBar from "base_components/RootSearchBar"

import { fetchGroupUsers } from "../thunks"
import { selectors } from "../ducks"

const Reminder = styled.p`
  font-size: 13px;
  color: #515151;
  line-height: 1.5;
  text-align: inherit;
`

class Sidebar extends Component {
  search = ({ target: { value } }) => {
    this.props.fetchGroupUsers({
      groupId: this.props.match.params.groupId,
      role: this.props.role,
      term: value
    })
  }

  render() {
    return (
      <MainRight>
        <SearchBar placeholder="Search people" onChange={this.search} />
        <Reminder>
          People can turn off their communication function. If you want to
          enable/disable messages go to settings.
        </Reminder>
      </MainRight>
    )
  }
}
const mapState = () =>
  createStructuredSelector({
    role: selectors.selectCurrentRole()
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
  pure
)(Sidebar)
