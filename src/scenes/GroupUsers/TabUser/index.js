import React from "react"

import UserList, { UserListItem } from "./../UserListItem"

const TabUser = ({ students }) => (
  <UserList>
    {Array.isArray(students) && students.length !== 0 ? (
      students.map((s, index) => <UserListItem student={s.user} key={index} />)
    ) : (
      <li>"No users found" </li>
    )}
  </UserList>
)

export default TabUser
