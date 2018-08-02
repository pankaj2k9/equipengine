import styled from "styled-components"

import MessageForm from "base_components/MessageForm"

export const Root = styled.div`
  @media screen and (min-width: 768px) {
    border-left: 1px solid #dadada;
    min-height: 90vh;
    position: relative;
    min-width: 400px;
  }
`

export const Header = styled.header`
  border-bottom: 1px solid #dadada;
  padding: 0.8em;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Text = styled.header`
  font-size: 0.8rem;
  color: #adadad;
  margin-top: 0.3em;
`

export const List = styled.ul`
  max-height: 200px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    max-height: 80vh;
    overflow-y: auto;
  }
`

export const Form = styled(MessageForm)`
  padding: 1.6em 1.3em;
  width: 100%;
  background: #ffffff;
  border-top: 1px solid #dadada;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 0;
  }
`
