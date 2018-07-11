import styled from "styled-components"
import Button from "base_components/RootButton"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.6em;
  border: 1px solid #c5c5c5;
  margin-bottom: 0.6em;
`

export const StyledButton = styled(Button)`
  width: 100%;
  font-size: 1rem;
  border-radius: 0;
`
