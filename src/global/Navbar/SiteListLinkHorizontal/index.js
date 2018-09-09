import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { identical } from "ramda"

import { ADMIN_ROLE } from "services/constants"
import { LinkHorizontal } from "../SiteLinkNavbar"

const ListLinkHorizontal = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  top: 10px;
  position: relative;
  height: 24px;
  display: flex;
  width: 100%;

  > li {
    margin-right: 24px;
  }
`

const SiteListLinkHorizontal = ({ accountType }) => (
  <ListLinkHorizontal>
    <li>
      <LinkHorizontal activeClassName="active" to="/secure/home">
        Home
      </LinkHorizontal>
    </li>
    <li>
      <LinkHorizontal activeClassName="active" to="/secure/activity">
        Activity
      </LinkHorizontal>
    </li>
    {identical(accountType, ADMIN_ROLE) && (
      <li>
        <LinkHorizontal
          width="80px"
          activeClassName="active"
          to="/secure/admin/groups"
        >
          Admin Area
        </LinkHorizontal>
      </li>
    )}
  </ListLinkHorizontal>
)

SiteListLinkHorizontal.propTypes = {
  accountType: PropTypes.string.isRequired
}

export default SiteListLinkHorizontal
