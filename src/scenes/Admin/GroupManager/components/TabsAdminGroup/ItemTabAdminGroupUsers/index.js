import React from "react"

import HeaderAdminGroupUsers from "./HeaderTabAdminGroupUsers"
import TableAdminGroupUsers from "./TableAdminGroupUsers"
import Modal from "../Modal"

import modal from "hoc/modal"

const users = [
  {
    name: "user1",
    avatar: "/static/media/user.002ba69c.png"
  },
  {
    name: "user2",
    avatar: "/static/media/user.002ba69c.png"
  }
]

const ItemTabAdminGroupUsers = ({ onOpen, onClose, isOpen }) => (
  <div>
    <HeaderAdminGroupUsers onOpen={onOpen} />
    <TableAdminGroupUsers />
    <Modal
      searchBarPlaceholder="Search users"
      headerText="Add user to group"
      items={users}
      handleClose={onClose}
      isOpen={isOpen}
    />
  </div>
)

export default modal(ItemTabAdminGroupUsers)
