import React from "react"
import styled from "styled-components"

import DateTime from "base_components/DateTime"

// the list component
const List = styled.ul`
  margin-top: 0.9em;

  @media screen and (min-width: 768px) {
    margin-top: 1.5em;
  }
`

// the list item component.
const ItemNotification = styled(({ className, notification }) => (
  <li className={className}>
    <DateTime date={notification.date} time={notification.time} />
    <p>{notification.text}</p>
  </li>
))`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
  padding: 1.3em 0;

  p {
    margin-bottom: 0;
    font-size: 16px;
    color: #2d2d2d;
    margin-left: 0.5em;
  }

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding: 2em 0;

    p {
      margin-left: 2em;
    }
  }
`

const ListNotification = ({ notifications }) => (
  <List>
    {notifications.map(notification => (
      <ItemNotification key={notification.id} notification={notification} />
    ))}
  </List>
)

export default ListNotification
