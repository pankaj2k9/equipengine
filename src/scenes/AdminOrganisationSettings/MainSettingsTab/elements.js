import styled from "styled-components"

import { FormGroup } from "base_components/RootForm"
import Panel from "base_components/Panel"
import Button from "base_components/RootButton"

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

export const PanelSettings = styled(Panel)`
  &:first-child {
    padding-top: 0;
  }

  header {
    margin-bottom: 0.8em;
  }

  @media screen and (min-width: 768px) {
    width: 50%;

    header {
      margin-bottom: 1em;
    }
  }
`

export const FormSettings = styled.div`
  padding: 0 2%;
`

export const ButtonSettings = styled(Button)`
  margin-top: 3em;

  @media screen and (min-width: 768px) {
    margin-bottom: 5em;
  }
`
