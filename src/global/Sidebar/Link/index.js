import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Link from "base_components/Link"

const StyledLi = styled.li`
  margin-bottom: 1.6em;
`

const StyledLink = styled(Link)`
  letter-spacing: 0.7px;
  color: #9fa6ad;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
`

const SidebarLink = ({ text, url, ...rest }) => (
  <StyledLi>
    <StyledLink text={text} url={url} {...rest} />
  </StyledLi>
)

SidebarLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default SidebarLink
