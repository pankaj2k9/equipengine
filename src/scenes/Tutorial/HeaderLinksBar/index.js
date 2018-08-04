import React from "react"
import PropTypes from "prop-types"

import closeSrc from "resources/images/close-button.svg"
import { IconButton } from "base_components/RootButton"
import BackIconButton from "base_components/BackIconButton"

import { Back, BackButton, CloseImage, Root } from "./elements"

const HeaderLinksBar = ({ onClose }) => (
  <Root>
    <Back>
      <BackIconButton onClick={onClose} />
      <BackButton light onClick={onClose}>
        View all lessons
      </BackButton>
    </Back>
    <IconButton light onClick={onClose}>
      <CloseImage alt="Close" src={closeSrc} />
    </IconButton>
  </Root>
)

HeaderLinksBar.propTypes = {
  onClose: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
}

export default HeaderLinksBar
