import styled from "styled-components"

import Container from "base_components/Container"

export const Body = Container.extend`
  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    min-height: 80vh;
    display: block;
  }
`

export const FormContainer = styled.div`
  display: flex;

  form {
    flex: 1;
  }
`
