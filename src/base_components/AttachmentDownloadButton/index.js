import React from "react"
import styled from "styled-components"

import Button from "base_components/RootButton"
import IconDownload from "react-icons/lib/fa/download"

const IconButton = styled(Button)`
  margin: 0.6em 0.5em 0 0.5em;
  margin-top: 0.6em;
  svg {
    margin-left: 0.5em;
  }
`

const AttachmentDownloadButton = ({ attachment }) => {
  if (!attachment || !attachment.data || !attachment.data.url) {
    return ""
  }
  return (
    <IconButton
      light
      lightBorder
      onClick={() => window.open(attachment.data.url, "_blank")}
    >
      {attachment.title || "Download"}
      <IconDownload />
    </IconButton>
  )
}

export default AttachmentDownloadButton
