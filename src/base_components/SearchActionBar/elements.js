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
  @media screen and (max-width: 767px) {
    width: 100%;
    margin-bottom: 10px;
    height: 40px;
  }
`
