import styled from "styled-components"

import BaseButtonAdd from "base_components/ButtonAdd"

import { listWidth } from "../constants"

export const Root = styled.div`
  width: ${listWidth}px;
`

export const ButtonAdd = styled(BaseButtonAdd)`
  margin-bottom: 14px;
`

export const ListItemRoot = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;

  i {
    color: #afafaf;
    font-size: 1.4rem;
    margin-right: 15px;
  }
`
