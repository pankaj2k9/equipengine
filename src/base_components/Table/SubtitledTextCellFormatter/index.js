import React from "react"

import { Root, Subtitle, Title } from "./elements"

const SubtitileTextCellFormatter = ({ title, subtitle }) => (
  <Root>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Root>
)

export default SubtitileTextCellFormatter
