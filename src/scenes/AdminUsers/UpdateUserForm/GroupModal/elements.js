import styled from "styled-components"

import { Checkbox as BaseCheckbox } from "base_components/RootForm"

export const Header = styled.header`
  display: flex;
  align-items: center;
`

export const H5 = styled.h5`
  margin-left: 1.1em;
  font-weight: 800;
  font-size: 1.1rem;
  color: #000000;
`

export const List = styled.div`
  max-height: 450px;
  padding: 15px;
  margin-top: 20px;
  border: 1px solid #dddddd;
  overflow-y: auto;
`

export const ListItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;

  > label {
    margin: 0;
    padding-left: 14px;
    cursor: pointer;
  }

  > div {
    margin-right: 0;
  }
`

export const Checkbox = styled(BaseCheckbox)`
  margin-right: 20px;
`
