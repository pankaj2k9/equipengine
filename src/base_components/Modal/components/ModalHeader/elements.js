import styled from "styled-components"

import { Modal } from "react-bootstrap"

export const Root = styled(Modal.Header)`
  display: flex;
  padding: 20px 35px;
  border-bottom: 1px solid #d8d8d8;
  align-items: center;
  justify-content: space-between;

  &:first-child::before,
  &:first-child::after {
    display: none;
  }
`

export const CloseIcon = styled.div`
  cursor: pointer;
`
