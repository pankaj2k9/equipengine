import styled from "styled-components"
import Button from "base_components/RootButton"
import Form, { Text } from "base_components/RootForm"
import Dropdown from "base_components/RootDropdown"

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    margin: 0;
    flex-direction: row;
  }
`

export const StyledButton = styled(Button)`
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) {
    :not(:last-child) {
      margin-right: 8px;
    }
  }
`

export const StyledText = styled(Text)`
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

export const StyledForm = styled(Form)`
  @media screen and (min-width: 768px) {
    width: 86px;
    flex: 1;
    margin: 0 0.714em;
  }
`

export const StyledDropdown = styled(Dropdown)`
  && .Select-control {
    display: flex;
    align-items: center;

    border: none;
    background-color: #ebebeb;
    border-radius: 3px;
    box-shadow: none;
  }

  &.is-focused {
    & > .Select-control,
    &:not(.is-open) > .Select-control {
      border: none;
      background-color: #c1c1c1;
      box-shadow: none;
    }

    .Select-input {
      background-color: transparent;
    }

    .Select-placeholder,
    .Select-value {
      color: #333333;
    }
  }

  .Select-multi-value-wrapper {
    flex-grow: 1;
  }

  && .Select-placeholder,
  && .Select-value {
    display: flex;
    flex-direction: row;
    align-items: center;

    color: #969696;
    font-size: 12px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 10px;
    height: 40px;
  }
`
