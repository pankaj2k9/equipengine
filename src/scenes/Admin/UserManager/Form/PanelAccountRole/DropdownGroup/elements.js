import styled from "styled-components"
import BaseDropdown from "base_components/RootDropdown"

export const Root = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  label {
    margin-right: 1.8em;
  }
`

export const Dropdown = styled(BaseDropdown)`
  width: 150px;
`
