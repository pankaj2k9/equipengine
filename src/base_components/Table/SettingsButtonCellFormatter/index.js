import React from "react"
import { IconButton } from "base_components/RootButton"
import IconSettings from "react-icons/lib/fa/cog"

const SettingsButtonCellFormatter = ({ onClick }) => (
  <span>
    <IconButton onClick={onClick}>
      <IconSettings />
    </IconButton>
  </span>
)

export default SettingsButtonCellFormatter
