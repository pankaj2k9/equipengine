import styled from "styled-components"

import Container from "base_components/Container"

export const Body = Container.extend`
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    display: block;
    margin: 0;
    padding: 1.2em 1.8em;
  }
`

export const FormContainer = styled.div`
  display: flex;

  form {
    flex: 1;
  }
`

export const Placeholder = styled.p`
  color: #a6a6a6;
  font-size: 1em;
`
