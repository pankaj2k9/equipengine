import React from "react"

import iconArrowLeft from "resources/images/arrowLeft.svg"
import RouteIconButton from "base_components/RouteIconButton"

export default ({ className }) => (
  <RouteIconButton
    className={className}
    to="/secure/home"
    icon={iconArrowLeft}
  />
)
