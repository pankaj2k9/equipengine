import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { identical } from "ramda"

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

const SiteListLinkHorizontal = ({ isOpenPanel, onToggle, accountType }) => (
  <ListLinkHorizontal isOpenPanel={isOpenPanel}>
    <li onClick={onToggle}>
      <LinkHorizontal activeClassName="active" to="/secure/home">
        Home
      </LinkHorizontal>
    </li>
    <li onClick={onToggle}>
      <LinkHorizontal activeClassName="active" to="/secure/activity">
        Actvity
      </LinkHorizontal>
    </li>
    {identical(accountType, "Admin") && (
      <li onClick={onToggle}>
        <LinkHorizontal
          width="80px"
          activeClassName="active"
          to="/secure/admin/group-manager"
        >
          Admin Area
        </LinkHorizontal>
      </li>
    )}
  </ListLinkHorizontal>
)

SiteListLinkHorizontal.propTypes = {
  isOpenPanel: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  accountType: PropTypes.string.isRequired
}

export default SiteListLinkHorizontal
