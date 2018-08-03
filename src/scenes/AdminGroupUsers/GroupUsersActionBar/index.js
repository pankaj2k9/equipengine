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
      isOpen: isOpenAddUserModal,
      onOpen: onOpenAddUserModal,
      onClose: onCloseAddUserModal,
      onAddUsers,
      onSearchUser
    } = this.props

    return (
      <div>
        <HeaderItemTab>
          <ButtonAdd
            onHandlerClick={onOpenAddUserModal}
            text="Add user to group"
          />
        </HeaderItemTab>
        <SelectItemModal
          isOpen={isOpenAddUserModal}
          title="Add user to group"
          searchBarPlaceholder="Search users"
          searchTerm={searchTerm}
          loading={isFetchingUsers}
          items={users}
          formatListItem={user => <UserInfoFormatter user={user} />}
          onSearch={onSearchUser}
          onClose={onCloseAddUserModal}
          onSubmit={onAddUsers}
        />
      </div>
    )
  }
}

export default modal(GroupUsersActionBar)
