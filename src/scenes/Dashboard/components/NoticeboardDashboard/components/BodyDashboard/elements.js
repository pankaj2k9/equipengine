import React from "react"
import styled from "styled-components"

import { IconButton } from "base_components/RootButton"
import Container from "base_components/Container"

import AttachmentIcon from "react-icons/lib/md/attach-file"

export const Body = Container.extend`
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    display: block;
    margin: 0;
    padding: 1.2em 1.8em;
  }
`

export const ButtonsContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
`

export const AttachmentButton = styled(({ className }) => (
  <IconButton className={className}>
    <AttachmentIcon height={26} />
  </IconButton>
))`
  margin-right: 7px;
`

export const Placeholder = styled.p`
  color: #a6a6a6;
  font-size: 1em;
`
