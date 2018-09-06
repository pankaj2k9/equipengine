import styled from "styled-components"

import { MainInnerContainer, MainLeft } from "base_components/Main"
import Button from "base_components/RootButton"

export const Container = styled(MainInnerContainer)`
  padding: 1.857em;
`

export const Left = styled(MainLeft)`
  margin-right: 1.857em;
`

export const UploadButton = Button.extend`
  width: 100%;
  margin-bottom: 1.2em;
  background-color: #d8d8d8;
`

export const UploadButtonSpan = styled.span`
  margin-right: 0.8em;
  display: inline-block;
`
