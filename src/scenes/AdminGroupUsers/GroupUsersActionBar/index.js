import React, { Component } from "react"

import ButtonAdd from "base_components/ButtonAdd"
import HeaderItemTab from "base_components/HeaderItemTab"
import SelectItemModal from "base_components/SelectItemModal"
import modal from "hoc/modal"
import UserInfoFormatter from "base_components/UserInfoFormatter"

class GroupUsersActionBar extends Component {
  render() {
    const {
      isFetchingUsers,
      users,
      searchTerm,
      isOpen,
      onOpen,
      onClose,
      onAddUsers,
      onSearchUser
    } = this.props

    return (
      <div>
        <HeaderItemTab>
          <ButtonAdd
            iconPosition="right"
            onHandlerClick={onOpen}
            text="Add user to group"
          />
        </HeaderItemTab>
        <SelectItemModal
          isOpen={isOpen}
          title="Add user to group"
          searchBarPlaceholder="Search users"
          searchTerm={searchTerm}
          loading={isFetchingUsers}
          items={users}
          formatListItem={user => <UserInfoFormatter user={user} />}
          onSearch={onSearchUser}
          onClose={onClose}
          onSubmit={onAddUsers}
        />
      </div>
    )
  }
}

export default modal(GroupUsersActionBar)
