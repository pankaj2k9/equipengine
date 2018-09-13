import styled, { css } from "styled-components"

export const AttachmentName = styled.span`
  ${props =>
    props.left &&
    css`
      margin-right: 10px;
    `};

  ${props =>
    props.right &&
    css`
      margin-left: 10px;
    `};

  margin-top: 10px;
  font-size: 12px;
`

export const AttachmentIcon = styled.img`
  margin-right: 1em;
  cursor: pointer;
`
