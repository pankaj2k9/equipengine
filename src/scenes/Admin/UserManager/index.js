import React from "react"

import ContainerAdminPanel from "scenes/Admin/components/ContainerAdminPanel"

import FilterableListAdminUser from "./FilterableListAdminUser"
import FormAdminUser from "./FormAdminUser"

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
    <FilterableListAdminUser users={users} />
    <FormAdminUser users={users} />
  </ContainerAdminPanel>
)

export default AdminUserManager
