import React from "react"
import PropTypes from "prop-types"
import { isNil } from "ramda"

// components
import UserAvatar from "base_components/UserAvatar"
import { StyledNavLink } from "./elements"

const ListLinkItem = ({ className, icon, text, url, onClick }) => (
  <StyledNavLink
    className={className}
    to={url}
    activeStyle={{
      backgroundColor: "#25282A"
    }}
    onClick={onClick}
  >
    <UserAvatar image={icon} />
    {!isNil(text) && <span>{text}</span>}
  </StyledNavLink>
)

ListLinkItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string.isRequired
}

export default ListLinkItem
