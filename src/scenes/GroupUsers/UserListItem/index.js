import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

import UserAvatar from "base_components/UserAvatar"
import avatar from "resources/images/user.png"
import Button from "base_components/RootButton"

// People item template
const UserListItem = styled(({ className, user, key }) => (
  <li className={className} key={key}>
    <div>
      <UserAvatar
        image={
          user
            ? user.avatar.small.url
              ? user.avatar.small.url
              : avatar
            : avatar
        }
        size="large"
      />
      <p>{user ? `${user.first_name} ${user.last_name}` : "No name"}</p>
      <Link to="/secure/messages">
        <Button large>Send Message</Button>
      </Link>
    </div>
  </li>
))`
  margin-bottom: 1.5em;

  > div {
    display: inline-block;
    padding: 1.375em;
    border: 1px solid #e2e2e2;
    border-radius: 5px;

    p {
      text-align: center;
      margin-top: 0.7em;
      font-size: 14px;
      color: #111111;
    }

    button {
      padding: 8px 0;
    }
  }

  @media screen and (min-width: 768px) {
    margin-right: 1.5em;
  }
`

// this is for people list template.
const UserList = styled.ul`
  margin-bottom: 2em;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export { UserList as default, UserListItem }
