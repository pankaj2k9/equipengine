import React from "react"
import Button, { IconButton } from "base_components/RootButton"
import { Desktop, Mobile } from "base_components/Responsive"
import IconDetails from "react-icons/lib/fa/wrench"

const DetailsButtonCellFormatter = ({ onClick, label }) => (
  <span>
    <Mobile>
      <IconButton onClick={onClick}>
        <IconDetails />
      </IconButton>
    </Mobile>
    <Desktop>
      <Button secondary onClick={onClick}>
        {label || "Details"}
      </Button>
    </Desktop>
  </span>
)

export default DetailsButtonCellFormatter
