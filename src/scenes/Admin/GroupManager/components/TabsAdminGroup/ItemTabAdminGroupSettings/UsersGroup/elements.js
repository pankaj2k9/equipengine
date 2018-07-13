import styled from "styled-components"

import { FormGroup } from "base_components/RootForm"
import { ButtonToolbar } from "react-bootstrap"
import Dropdown from "base_components/Dropdown"

import { PanelFullWidth } from "../elements"

export const Root = styled(PanelFullWidth)`
  label {
    width: 100px;
    margin-right: 2em;
    padding-top: 0.2em;
    margin-bottom: 33px;

    &:first-child {
      margin-right: 1.7em;
    }
  }
`

export const FormGroupUser = FormGroup.extend`
  display: flex;
  align-items: center;
`

export const StyledButtonTopbar = styled(ButtonToolbar)`
  margin-top: -27px;
`

export const DropdownExtend = Dropdown.extend`
  display: flex;
  width: 82px;
  align-items: center;
  justify-content: space-evenly;
`
