import React from "react"
import styled from "styled-components"

import UserAvatar from "base_components/UserAvatar"
import iconUser from "resources/images/user.png"
import { compose, getContext } from "recompose"
import { contextPropTypes } from "../../../../proptypes"

// the list component
const List = styled.ul`
  margin-top: 1.5em;

  @media screen and (min-width: 768px) {
    margin-top: 2.4em;
  }
`

// the list item user component.
const ListItemUser = styled(({ className, name, onClick }) => (
  <li className={className} onClick={onClick}>
    <UserAvatar image={iconUser} />
    <span>{name}</span>
  </li>
))`
  display: flex;
  align-items: center;
  padding: 0.8em;
  background-color: ${({ active }) => active && "rgba(184,184,184,.2)"};
  cursor: pointer;

  span {
    color: #111111;
    margin-left: 0.7em;
  }

  @media screen and (min-width: 768px) {
    padding: 0.8em 2.6em;
  }
`

// hold the List of user components.
const ListUser = ({ users, selectedUserId, selectUser }) => (
  <List>
    {users.map(({ id, name }) => (
      <ListItemUser
        name={name}
        active={selectedUserId === id}
        selectUser={selectUser}
        onClick={() => selectUser(id)}
      />
    ))}
  </List>
)

export default compose(getContext(contextPropTypes))(ListUser)
