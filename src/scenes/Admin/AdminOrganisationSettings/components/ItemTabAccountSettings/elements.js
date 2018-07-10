import React from "react"

import styled from "styled-components"

import BaseButton from "base_components/RootButton"
import ButtonAddBase from "base_components/ButtonAdd"
import BasePanel from "base_components/Panel"
import ContainerFlex from "base_components/ContainerFlex"
import CloseIcon from "react-icons/lib/md/close"

export const Button = styled(BaseButton)`
  margin-top: 3em;

  @media screen and (min-width: 768px) {
    margin-bottom: 5em;
  }
`

export const ButtonAdd = styled(ButtonAddBase)`
  width: 130px;
`

export const Form = styled.div`
  padding: 0 2%;
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 96%;
  }
`

export const Panel = styled(BasePanel)`
  &:first-child {
    padding-top: 0;
  }

  header {
    margin-bottom: 0.8em;
  }

  @media screen and (min-width: 768px) {
    width: 100%;

    header {
      margin-bottom: 1em;
    }
  }
`

export const User = styled(({ user, className }) => (
  <ContainerFlex className={className} isAlignCenter isSpaceBetween>
    <span>{user.name}</span>
    <CloseIcon className={`${className}__icon`} />
  </ContainerFlex>
))`
  margin-bottom: 15px;

  &__icon {
    font-size: 23px;
    color: #afafaf;
  }
`
