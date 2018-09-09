import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { compose, pure } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"
import InfiniteScroll from "react-infinite-scroller"

import { fetchGroupUsers, fetchMoreGroupUsers } from "../thunks"
import { selectors } from "../ducks"

import Loading from "base_components/Loading"
import UserList, { UserListItem } from "./../UserListItem"

class TabUser extends Component {
  componentDidMount() {
    const { role, searchTerm } = this.props
    this.props.fetchGroupUsers({
      groupId: this.props.match.params.groupId,
      role: role,
      term: searchTerm
    })
  }

  loadMore = page => {
    const { role, searchTerm } = this.props
    this.props.fetchMoreGroupUsers({
      groupId: this.props.match.params.groupId,
      role: role,
      term: searchTerm,
      current_page: page
    })
  }

  render() {
    const { users, isFetchingUsers, pagination } = this.props

    return (
      <InfiniteScroll
        pageStart={1}
        loadMore={this.loadMore}
        hasMore={pagination && pagination.total_pages > pagination.current_page}
        initialLoad={false}
      >
        <UserList>
          {Array.isArray(users) && users.length !== 0 ? (
            users.map((user, index) => <UserListItem user={user} key={index} />)
          ) : isFetchingUsers ? (
            ""
          ) : (
            <li>No users found</li>
          )}
        </UserList>
        {isFetchingUsers ? <Loading /> : ""}
      </InfiniteScroll>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    users: selectors.selectGroupUsers(),
    isFetchingUsers: selectors.selectIsFetchingGroupUsers(),
    searchTerm: selectors.selectSearchTerm(),
    pagination: selectors.selectPagination()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchGroupUsers,
      fetchMoreGroupUsers
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
)(TabUser)
