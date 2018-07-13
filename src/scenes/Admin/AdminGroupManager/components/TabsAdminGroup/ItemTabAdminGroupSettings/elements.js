import React from "react"
import styled from "styled-components"

import { FormGroup, Label } from "base_components/RootForm"
import Panel from "base_components/Panel"

const PanelFullWidth = props => <Panel isFullWidth {...props} />

export const FormGroupUser = FormGroup.extend`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`

export const PanelUsersLabel = styled.span`
  width: 100px;
`

export const GeneralInfoRoot = PanelFullWidth.extend`
  width: 100%;
  padding-top: 6px;
  padding-bottom: 33px;
`

export const NoticeBoardRoot = PanelFullWidth.extend`
  width: 100%;
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

export const ControlGroupRoot = PanelFullWidth.extend`
  width: 100%;
  padding-bottom: 28px;
`
