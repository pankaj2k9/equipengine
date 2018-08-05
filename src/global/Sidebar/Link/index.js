import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Link from "base_components/Link"

const StyledLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  &:not(:last-child) {
    margin-bottom: 1.6em;
  }
`

const StyledLink = styled(Link)`
  letter-spacing: 0.7px;
  color: #9fa6ad;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
`

const Badge = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 13px;
  height: 13px;

  background: #f44336;
  border-radius: 50%;

  color: #ffffff;
  font-family: "Avenir Next", sans-serif;
  font-size: 7px;
  font-weight: 500;
`

const SidebarLink = ({ text, url, badge, ...rest }) => (
  <StyledLi>
    <StyledLink text={text} url={url} {...rest} />
    {badge && <Badge>10</Badge>}
  </StyledLi>
)

SidebarLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default SidebarLink
