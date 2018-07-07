import styled from "styled-components"

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 3%;

  @media screen and (min-width: 768px) {
    padding: 16px 35px;
  }
`

export const Back = styled.span`
  color: #9fa6ad;
`

export const CloseImage = styled.img`
  height: 15px;
`
