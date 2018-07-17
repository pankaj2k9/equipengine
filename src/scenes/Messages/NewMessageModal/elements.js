import React from "react"
import styled from "styled-components"

import { FormGroup as BaseFormGroup } from "base_components/RootForm"
import BaseAttachmentIcon from "react-icons/lib/md/attach-file"

export const HeaderRoot = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 13px;
    position: relative;
    top: -4px;
  }
`

export const FooterRoot = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  & > *:last-child {
    margin-left: 13px;
  }
`

export const FormGroup = styled(BaseFormGroup)`
  display: flex;
  flex-direction: column;
`

const AttachmentIcon = props => <BaseAttachmentIcon fontSize={31} {...props} />

export const AttachmentButton = styled(AttachmentIcon)`
  cursor: pointer;
`
