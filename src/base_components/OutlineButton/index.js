import React from "react"
import styled from "styled-components"

// TODO merge with RootButton
const OutlineButton = ({ className, children, ...rest }) => (
  <button className={className} {...rest}>
    {children}
  </button>
)

export default styled(OutlineButton)`
  background: none;
  border: 1px solid #b9b9b9;
  color: #80808b;
  padding: 4px 13px 4px 7px;
  position: relative;
  top: -6px;
  border-radius: 4px;
  transition: all 300ms ease-in;

  img {
    vertical-align: text-bottom;
    margin-right: 5px;
  }

  svg {
    vertical-align: text-bottom;
    margin-right: 5px;
    margin-bottom: 2px;
  }

  &:hover {
    border-color: #000000;
    color: #000000;
  }
`
