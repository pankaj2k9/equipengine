import styled from "styled-components"

import { FormGroup } from "base_components/RootForm"

import { FullWidthPanel } from "../elements"

export const Root = styled(FullWidthPanel)`
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

export const UserFormGroup = FormGroup.extend`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`

export const Label = styled.div`
  margin-right: 20px;
`
