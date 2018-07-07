import React from "react"
import PropTypes from "prop-types"

import closeSrc from "resources/images/close-button.svg"
import Button, { IconButton } from "base_components/RootButton"
import BackIconButton from "base_components/BackIconButton"

import { Root, Back, CloseImage } from "./elements"

const HeaderLinksBar = ({ onCloseTutorial, onViewAllLessons }) => (
  <Root>
    <Back>
      <BackIconButton onClick={onViewAllLessons} />
      <Button light onClick={onViewAllLessons}>
        View all lessons
      </Button>
    </Back>
    <IconButton light onClick={onCloseTutorial}>
      <CloseImage alt="Close" src={closeSrc} />
    </IconButton>
  </Root>
)

HeaderLinksBar.propTypes = {
  onClose: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
}

export default HeaderLinksBar
