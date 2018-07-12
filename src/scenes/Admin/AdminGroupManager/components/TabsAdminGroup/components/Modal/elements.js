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
  border: 1px solid #dddddd;
  padding: 15px;
  margin-top: 20px;
`

export const ListItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`

export const Checkbox = styled(BaseCheckbox)`
  margin-right: 20px;
`

export const Avatar = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  object-position: top;
  object-fit: cover;
  margin-right: 20px;
`

export const BodyLabel = styled.div`
  margin-bottom: 15px;
`
