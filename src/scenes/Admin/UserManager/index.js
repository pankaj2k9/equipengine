import React from "react"

import ContainerAdminPanel from "scenes/Admin/components/ContainerAdminPanel"

import FilterableList from "./FilterableList"
import Form from "./Form"

const users = [
  {
    name: "user1",
    status: "teacher",
    isActive: false
  },
  {
    name: "user2",
    status: "teacher",
    isActive: false
  }
]

const AdminUserManager = () => (
  <ContainerAdminPanel>
    <FilterableList users={users} />
    <Form users={users} />
  </ContainerAdminPanel>
)

export default AdminUserManager
