import styled from "styled-components"

import { Label } from "base_components/RootForm"

import { PanelFullWidth } from "../elements"

export const Root = styled(PanelFullWidth)`
  padding-bottom: 0;

  header label {
    margin-right: 0.9em;
  }

  @media screen and (min-width: 768px) {
    header {
      width: 315px;

      label {
        margin-right: 0;
      }
    }
  }
`

export const LabelNoticeBoard = Label.extend`
  width: 134px;
  margin-right: 8em;
`

export const ContainerFormGroups = styled.div`
  padding: 14px;
  background: #fbfbfb;

  @media screen and (min-width: 768px) {
    padding: 27px;
  }
`
