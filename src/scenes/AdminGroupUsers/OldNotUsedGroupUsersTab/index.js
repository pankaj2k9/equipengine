import React from "react"

import HeaderAdminGroupUsers from "./HeaderTabAdminGroupUsers"
import TableAdminGroupUsers from "./TableAdminGroupUsers"
import SelectItemModal from "base_components/SelectItemModal"
import modal from "hoc/modal"
import UserInfoFormatter from "base_components/UserInfoFormatter"

const users = [
  {
    id: 12,
    email: "user1",
    avatar: {
      url: "/static/media/user.002ba69c.png"
    }
  },
  {
    id: 34,
    email: "user2"
  }
]

const ItemTabAdminGroupUsers = ({ onOpen, onClose, isOpen }) => (
  <div>
    <HeaderAdminGroupUsers onOpen={onOpen} />
    <TableAdminGroupUsers />
    <SelectItemModal
      isOpen={isOpen}
      title="Add user to group"
      searchBarPlaceholder="Search users"
      items={users}
      formatListItem={user => <UserInfoFormatter user={user} />}
      onClose={onClose}
      onSubmit={() => console.log("submit")}
    />
  </div>
)

export default modal(ItemTabAdminGroupUsers)
