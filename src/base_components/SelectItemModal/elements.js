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

export const Hint = styled.div`
  font-size: 15px;
  color: #6d6d6d;
  margin: 25px 0;
`

export const List = styled.div`
  border: 1px solid #dddddd;
  padding: 15px;
  margin-top: 20px;
`

export const ListTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
`

export const ListItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`

export const ListItemLabel = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Checkbox = styled(BaseCheckbox)`
  margin-right: 20px;
`
