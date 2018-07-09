import React from "react"
import styled from "styled-components"

import { IconButton } from "base_components/RootButton"
import Container from "base_components/Container"

import AttachmentIcon from "react-icons/lib/md/attach-file"

export const Body = Container.extend`
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    min-height: 80vh;
    display: block;
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
