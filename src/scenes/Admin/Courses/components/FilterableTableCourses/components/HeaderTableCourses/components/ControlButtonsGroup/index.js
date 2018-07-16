import React from "react"
//
import styled from "styled-components"
//
import Button from "base_components/RootButton"
import ContainerFlex from "base_components/ContainerFlex"

const ControlButtonsGroup = ({ className }) => (
  <ContainerFlex className={`${className}__container`}>
    <Button secondary>Show All</Button>
  </ContainerFlex>
)

export default styled(ControlButtonsGroup)`
  &__container {
    flex-direction: column;

    @media screen and (max-width: 767px) {
      > button {
        width: 100%;
        margin-bottom: 10px;
      }

      > button:last-child {
        margin-bottom: 0;
      }
    }

    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;

      > button:first-child {
        margin-right: 1em;
      }
    }
  }
`
