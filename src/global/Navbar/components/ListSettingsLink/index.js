import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const ListSettingsLink = styled(({ className }) => (
  <ul className={className}>
    <li>
      <Link to="/groups">Groups</Link>
    </li>
    <li>
      <Link to="/settings">Settings</Link>
    </li>
  </ul>
))`
  display: flex;
  flex: 1;
  margin-left: 25px;

  li {
    margin-right: 0.6em;

    a {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      color: #9fa6ad;
    }
  }

  @media screen and (min-width: 768px) {
    margin-left: 230px;

    li {
      margin-right: 2em;
    }
  }
`

export default ListSettingsLink
