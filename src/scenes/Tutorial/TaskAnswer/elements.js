import styled from "styled-components"

export const Root = styled.div`
  display: flex;
`

export const Form = styled.form`
  margin-left: 0.6em;
  flex-grow: 1;
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.lightgray};
  padding: 1em;
  font-size: 14px;
  border-radius: 4px;
  margin-bottom: 0.4em;
  outline: 0;
`

export const ButtonContainer = styled.div`
  display: flex;
  float: right;
`

export const AttachmentName = styled.span`
  margin-right: 10px;
  margin-top: 10px;
`

export const AttachmentIcon = styled.img`
  margin-right: 1em;
  cursor: pointer;
`
