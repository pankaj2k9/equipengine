import styled from "styled-components"

import BaseButton from "base_components/RootButton"
import { Text } from "base_components/RootForm"
import BasePanel from "base_components/Panel"

export const SubdomainText = Text.extend`
  max-width: 356px;
`

export const Postfix = styled.div`
  margin-left: 12px;
`

export const StatusIcon = styled.div`
  background-color: ${({ isConnected: x }) => (x ? "#2FE330" : "#D0021B")};
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin-left: 3px;
  margin-right: 11px;
`

export const StatusTitle = styled.span`
  font-size: 14px;
`

export const Status = styled.span`
  font-size: 11px;
`

export const GrayContainer = styled.div`
  background-color: #f3f3f3;
  padding: 22px;
  margin-bottom: 10px;
`

export const ContainerDisplayLogo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.6em;
  margin-bottom: 2.6em;
`

export const DisplayTextLogo = styled.span`
  margin-right: 2em;
`

export const Button = styled(BaseButton)`
  margin-top: 3em;

  @media screen and (min-width: 768px) {
    margin-bottom: 5em;
  }
`

export const Panel = styled(BasePanel)`
  border-bottom: none;

  @media screen and (max-width: 767px) {
    padding-top: 30px;
    padding-left: 2%;
    padding-right: 2%;
  }

  &:first-child {
    padding-top: 0;
  }

  header {
    margin-bottom: 0.8em;
  }

  @media screen and (min-width: 768px) {
    width: 100%;

    header {
      margin-bottom: 1em;
    }
  }
`

export const Form = styled.div`
  padding: 0 2%;
  width: 50%;

  @media screen and (max-width: 767px) {
    width: initial;
  }
`
