import React from "react"

import { Root, Title, InfoContainer, Icon, StyledLink } from "./elements"
import infoIcon from "./info.svg"

const NoCourses = () => {
  return (
    <Root>
      <Title>You do not have any courses.</Title>
      <InfoContainer>
        <Icon src={infoIcon} alt="information" />
        <StyledLink to="/">Learn more about courses.</StyledLink>
      </InfoContainer>
    </Root>
  )
}

export default NoCourses
