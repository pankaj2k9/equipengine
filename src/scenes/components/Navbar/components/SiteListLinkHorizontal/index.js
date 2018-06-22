import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { LinkHorizontal } from '../SiteLinkNavbar'

const ListLinkHorizontal = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  top: 10px;
  position: relative;
  height: 24px;
  display: flex;

  > li {
    margin-right: 24px;
  }
  @media screen and (min-width: 768px) {
    
  }
`

const SiteListLinkHorizontal = ({ isOpenPanel, onToggle }) => (
  <ListLinkHorizontal isOpenPanel={isOpenPanel}>
    <li onClick={onToggle}>
      <LinkHorizontal activeClassName='active' to='/secure/home'>
        Home
      </LinkHorizontal>
    </li>
    <li onClick={onToggle}>
      <LinkHorizontal activeClassName='active' to='/secure/activity'>
        Actvity
      </LinkHorizontal>
    </li>
  </ListLinkHorizontal>
)

SiteListLinkHorizontal.propTypes = {
  isOpenPanel: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
}

export default SiteListLinkHorizontal
