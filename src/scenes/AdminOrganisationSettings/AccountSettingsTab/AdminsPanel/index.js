import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { createStructuredSelector } from "reselect"
import InfiniteScroll from "react-infinite-scroller"

import { selectors, actions } from "../../ducks"
import { fetchAdmins } from "../../thunks"

import UserInfoFormatter from "base_components/UserInfoFormatter"

import {
  Panel,
  ButtonAdd,
  AddUserWrapper,
  GrayBorderContainer,
  HintText,
  Title,
  UserListItem as UserListItemElement,
  UserListItemCloseIcon
} from "../elements"

const UserListItem = ({ user, remove }) => (
  <UserListItemElement>
    <UserInfoFormatter user={user} />
    <UserListItemCloseIcon onClick={() => remove(user)} />
  </UserListItemElement>
)

class AccountsPanel extends Component {
  componentDidMount() {
    this.loadMore()
  }

  loadMore = (current_page = 1) => {
    const { fetchAdmins } = this.props

    fetchAdmins({ current_page })
  }

  render() {
    const { onOpen, admins, isFetching, deleteAdmin, pagination } = this.props

    return (
      <Panel title="Accounts">
        <HintText>
          Be careful - this will provide users access to everything related to
          this organisation account.
        </HintText>
        <AddUserWrapper isAlignCenter isSpaceBetween>
          <Title>Administrators</Title>
          <ButtonAdd
            onHandlerClick={onOpen}
            text="Add user"
            iconPosition="right"
          />
        </AddUserWrapper>
        <GrayBorderContainer>
          <InfiniteScroll
            pageStart={1}
            loadMore={this.loadMore}
            hasMore={
              !isFetching &&
              pagination &&
              pagination.total_pages > pagination.current_page
            }
            useWindow={false}
          >
            {!admins.length && "No administrators"}
            {admins.map(user => (
              <UserListItem key={user.id} user={user} remove={deleteAdmin} />
            ))}
          </InfiniteScroll>
        </GrayBorderContainer>
      </Panel>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    admins: selectors.selectAdmins(),
    isFetching: selectors.selectIsFetchingAdmins(),
    pagination: selectors.selectAdminsPagination()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchAdmins,
      deleteAdmin: actions.deleteOrganizationAdmin
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(AccountsPanel)
