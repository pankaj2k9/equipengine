import React from "react"
import { bindActionCreators } from "redux"
import { compose, pure, withHandlers, withState } from "recompose"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { withRouter } from "react-router-dom"
import InfiniteScroll from "react-infinite-scroller"
// components
import Loading from "base_components/Loading"
import { Layout, Header, UserListCell, UserTitle } from "./elements"
import { fetchMoreGroupUsers } from "../thunks"
import RoleUser from "base_components/RoleUser"
import { Checkbox } from "base_components/RootForm/components/Checkbox"
import StatusCircle from "base_components/StatusCircle"
import UserAvatar from "base_components/UserAvatar"
import {
  DateCellFormatter,
  DetailsButtonCellFormatter
} from "base_components/Table"
import { selectors } from "../selectors"
import { actions } from "../ducks"

const GroupUsersList = ({
  users,
  className,
  handleLoadMore,
  pagination,
  onUserClick,
  isDeletingUsersFromGroup,
  isUpdatingUserGroupStatus,
  selectedGroupUsers,
  toggleGroupUserState
}) => {
  return (
    <div className={className}>
      {isDeletingUsersFromGroup || isUpdatingUserGroupStatus ? (
        <Loading />
      ) : (
        <div>
          <Layout>
            <Header width="5%" />
            <Header width="10%">Profile</Header>
            <Header width="15%">Last name</Header>
            <Header width="15%">First name</Header>
            <Header width="10%">Date added</Header>
            <Header width="10%">Status</Header>
            <Header width="15%">Role</Header>
            <Header width="20%" />
          </Layout>
          <InfiniteScroll
            pageStart={1}
            loadMore={handleLoadMore}
            hasMore={
              pagination && pagination.total_pages > pagination.current_page
            }
            initialLoad={false}
            useWindow={true}
            loader={<Loading />}
            useCapture={true}
          >
            {users.map(user => {
              return (
                <Layout key={user.id} hover>
                  <UserListCell width="5%">
                    <Checkbox
                      defaultChecked={selectedGroupUsers.some(
                        id => id === user.id
                      )}
                      checked={selectedGroupUsers.some(id => id === user.id)}
                      onChange={() => toggleGroupUserState(user.id)}
                    />
                  </UserListCell>

                  <UserListCell width="10%">
                    <UserAvatar image={user.avatar && user.avatar.url} />
                  </UserListCell>

                  <UserListCell width="15%" align="center">
                    <UserTitle>{user.last_name}</UserTitle>
                  </UserListCell>

                  <UserListCell width="15%" align="center">
                    <UserTitle>{user.first_name}</UserTitle>
                  </UserListCell>

                  <UserListCell width="10%" align="center">
                    <DateCellFormatter date={new Date(user.date_added)} />
                  </UserListCell>

                  <UserListCell width="10%" align="center">
                    <StatusCircle disabled={!user.status} state={user.status} />
                  </UserListCell>

                  <UserListCell width="15%" align="center">
                    <RoleUser roleUser={user.role} />
                  </UserListCell>

                  <UserListCell width="20%" align="right">
                    <DetailsButtonCellFormatter
                      onClick={() => onUserClick(user)}
                    />
                  </UserListCell>
                </Layout>
              )
            })}
          </InfiniteScroll>
        </div>
      )}
    </div>
  )
}

const mapState = () =>
  createStructuredSelector({
    isDeletingUsersFromGroup: selectors.selectIsDeletingUsersFromGroup(),
    isUpdatingUserGroupStatus: selectors.selectIsUpdatingUserGroupStatus(),
    selectedGroupUsers: selectors.selectSelectedGroupUser(),

    pagination: selectors.selectGroupUsersPagination()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      toggleGroupUserState: actions.toggleGroupUserState,
      fetchMoreGroupUsers
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
  withState("groupId", null, ({ location, match }) =>
    // retrieve group id from url if provided
    location.pathname.replace(match.url, "").replace("/", "")
  ),
  withHandlers({
    handleLoadMore: ({ groupId, fetchMoreGroupUsers }) => page => {
      fetchMoreGroupUsers({ groupId, current_page: page })
    }
  }),
  pure
)(GroupUsersList)
