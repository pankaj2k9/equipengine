import React from "react"
import styled from "styled-components"
import ContainerFlex from "base_components/ContainerFlex"
import CloseIcon from "react-icons/lib/md/close"

const User = ({ user, className }) => (
  <ContainerFlex className={className} isAlignCenter isSpaceBetween>
    <span>{user.name}</span>
    <CloseIcon className={`${className}__icon`} />
  </ContainerFlex>
)

const StyledUser = styled(User)`
  margin-bottom: 15px;

  &__icon {
    font-size: 23px;
    color: #afafaf;
  }
`

export default StyledUser
