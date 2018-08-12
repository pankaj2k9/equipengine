import styled from "styled-components"
import ContainerFlex from "base_components/ContainerFlex"

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
`

export const DndIcon = styled.i`
  font-size: 1.2rem;
  margin-right: 12px;
`

export const DeleteIcon = styled.i`
  margin-left: 12px;
`

export const Root = styled(ContainerFlex)`
  width: 100%;
  padding-left: 10px;

  > div:first-child {
    > div {
      p {
        font-size: 1rem;
        margin-bottom: 0.2em;
      }
    }
  }

  @media screen and (min-width: 768px) {
    padding: 1.5em;
  }
`
