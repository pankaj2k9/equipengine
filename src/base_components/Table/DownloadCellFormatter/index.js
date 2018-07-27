import React from "react"

import { Desktop } from "base_components/Responsive"
import Download from "base_components/Download"
import iconDownload from "resources/images/download.svg"
import { Root, DownloadIcon } from "./elements"

const DownloadCellFormatter = ({ file }) => (
  <Root>
    <Desktop>
      <Download />
    </Desktop>
    <DownloadIcon alt="download" src={iconDownload} />
  </Root>
)

export default DownloadCellFormatter
