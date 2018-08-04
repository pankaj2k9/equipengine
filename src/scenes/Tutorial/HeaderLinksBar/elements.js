import styled from "styled-components"

import Button from "base_components/RootButton"

export const Back = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: #9fa6ad;
`

export const BackButton = Button.extend`
  padding: 0;
  width: auto;
`

export const CloseImage = styled.img`
  height: 15px;
`

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 62px;

  padding: 0 24px 0 36px;

  border-bottom: 1px solid #dadada;
`
