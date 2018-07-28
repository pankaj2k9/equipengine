import styled from "styled-components"

import { listWidth } from "../constants"

import { FormGroup as BaseFormGroup } from "base_components/RootForm"
import BaseCheckBox from "base_components/CheckboxRound"

export const Root = styled.div`
  width: calc(100% - ${listWidth + 20}px);
  margin-left: 20px;
`

export const FormGroup = styled(BaseFormGroup)`
  display: flex;
  flex-direction: column;
`

export const CheckBox = styled(BaseCheckBox)`
  width: 33px !important;
  margin-right: 17px;
`
