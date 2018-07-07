import React from "react"

import { Root, Headline } from "./elements"

const TutorialDetails = ({ title, description }) => (
  <Root>
    <Headline>{title}</Headline>
    <p>{description}</p>
  </Root>
)

export default TutorialDetails
