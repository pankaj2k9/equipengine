import { Modal as BaseModal } from "react-bootstrap"
import styled from "styled-components"

import Button from "base_components/RootButton"

export const ButtonContainer = styled.div`
  width: 196px;
`

export const CloseButton = styled(Button)`
  margin-bottom: 12px;
  padding: 0;

  width: 100%;
  height: 46px;

  color: #bfbfbf;

  background: #ffffff;

  border-width: 2px;
  border-style: solid;
  border-color: #dddddd;
  border-radius: 3px;

  &:hover {
    border: 2px solid #dddddd !important;
  }
`

export const ReviewButton = styled(Button)`
  padding: 0;

  width: 100%;
  height: 34px;
`

export const Header = styled.h3`
  margin: 0 0 2.571em 0;

  font-weight: bold;
  font-size: 1.286em;
  text-align: center;
`

export const Modal = styled(BaseModal)`
  .modal-dialog {
    width: 100%;
    height: 100%;
    margin: 0;

    .modal-content {
      display: flex;
      flex-direction: column;

      border-radius: 0;
      border: 0;
      min-height: 100vh;
      max-height: 100vh;
      position: relative;
    }
  }
`

export const ModalBody = styled.div`
  flex: 1;

  display: flex;

  padding: 2.857em 3.857em;

  overflow-y: auto;
`

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 100px;

  padding: 0 3.857em;

  border-top: 1px solid #dadada;
`

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 80px;

  padding: 0 3.857em;

  border-bottom: 1px solid #dadada;

  font-size: 1.286em;
  font-weight: bold;
`

export const Question = styled.h4`
  font-size: 1.286em;
`

export const QuizBody = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`

export const QuizBodyContent = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const QuizScore = styled.div`
  font-size: 3.429em;
`

export const QuizScoreRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 264px;
  height: 264px;

  margin-bottom: 2.286em;

  background: #0e90e0;

  color: #ffffff;

  border-width: 2px;
  border-style: solid;
  border-color: #0e90e0;
  border-radius: 50%;

  span {
    font-size: 1.714em;
  }
`

export const Step = styled.div`
  margin: 9px;

  width: 12px;
  height: 12px;

  border-width: 1px;
  border-style: solid;
  border-color: #979797;
  border-radius: 50%;

  &.active {
    background-color: #d8d8d8;
  }
`

export const Steps = styled.div`
  display: flex;
  flex-direction: row;
`
