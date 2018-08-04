import React from "react"

import closeSrc from "resources/images/close-button.svg"

import { CloseImage, RemoveButton } from "./elements"

const CloseCellFormatter = ({ onClose }) => (
  <RemoveButton light onClick={onClose}>
    <CloseImage alt="Close" src={closeSrc} />
  </RemoveButton>
)

export default CloseCellFormatter
