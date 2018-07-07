import React from "react"
import { IconButton } from "base_components/RootButton"
import iconArrowLeft from "resources/images/arrowLeft.svg"

export default ({ children, ...rest }) => (
  <IconButton {...rest}>
    <img src={iconArrowLeft} alt="Back" />
  </IconButton>
)
