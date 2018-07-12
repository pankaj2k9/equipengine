import styled from "styled-components"
import BasePanel from "base_components/Panel"
import BaseButton from "base_components/RootButton"

export const Button = styled(BaseButton)`
  margin-top: 3em;

  @media screen and (min-width: 768px) {
    margin-bottom: 5em;
  }
`

export const Form = styled.div`
  padding: 0 2%;
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 96%;
  }
`

export const Panel = styled(BasePanel)`
  border-bottom: none;

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
