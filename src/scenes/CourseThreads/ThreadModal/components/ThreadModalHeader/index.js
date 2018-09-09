import React from "react"
import styled from "styled-components"

import { IconButton } from "base_components/RootButton"
import BackIconButton from "base_components/BackIconButton"
import closeSrc from "resources/images/close-button.svg"

import { Back, BackButton, CloseImage, Root } from "./elements"

const ThreadModalHeader = styled(({ onClose }) => (
  <Root>
    <Back>
      <BackIconButton onClick={onClose} />
      <BackButton light onClick={onClose}>
        View all discussion
      </BackButton>
    </Back>
    <IconButton light onClick={onClose}>
      <CloseImage alt="Close" src={closeSrc} />
    </IconButton>
  </Root>
))`
  width: 100%;

  > div {
    max-width: 774px;
    margin: 0 auto;
  }

  button {
    width: auto;
  }
`

export default ThreadModalHeader
