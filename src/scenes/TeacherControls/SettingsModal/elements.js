import React from "react"
import styled from "styled-components"

import { FormGroup as BaseFormGroup } from "base_components/RootForm"
import BaseAttachmentIcon from "react-icons/lib/md/attach-file"

export const HeaderRoot = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 30px;
  }

  & > *:last-child {
    font-size: 25px;
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

export const ListContainer = styled.div`
  border: 1px solid #e0e0e0;
  padding: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
`

export const ListItemRoot = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  & > *:first-child {
    margin-right: 14px;
  }
`

export const Label = styled.div`
  font-size: 18px;
`

export const SubLabel = styled.div`
  font-size: 14px;
`

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 15px;
  }
`
