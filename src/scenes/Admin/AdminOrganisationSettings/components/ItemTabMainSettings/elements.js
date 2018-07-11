import styled from "styled-components"
import { FormGroup } from "base_components/RootForm"

export const HintTextLogo = styled.span`
  font-size: 12px;
  color: #666666;
  width: 119px;
  display: inline-block;
  margin-left: 1em;
`

export const ContainerDisplayLogo = styled.div`
  display: flex;
  margin-top: 0.6em;
`

export const DisplayTextLogo = styled.span`
  width: 130px;
  margin-right: 2em;
`

export const FormGroupDropdown = styled(FormGroup)`
  flex: 1;
  margin-right: 0.6em;

  .Select-control {
    height: 40px;
  }
`

export const FormGroupZipCode = styled(FormGroup)`
  width: 25%;
`
