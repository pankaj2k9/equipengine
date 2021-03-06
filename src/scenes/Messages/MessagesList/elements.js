import styled from "styled-components"

import MessageForm from "base_components/MessageForm"

export const Root = styled.div`
  @media screen and (min-width: 768px) {
    border-left: 1px solid #dadada;
    position: relative;
    min-width: 400px;
    width: 65%;
    display: flex;
    flex-direction: column;
  }
`

export const SelectChat = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 16px;
  color: #c9c9c9;
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
  overflow-y: auto;
  flex: 1;
`

export const Form = styled(MessageForm)`
  padding: 2em 1.3em;
  width: 100%;
  background: #ffffff;
  border-top: 1px solid #dadada;
`
