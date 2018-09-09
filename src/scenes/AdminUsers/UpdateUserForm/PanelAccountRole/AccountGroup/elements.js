import styled from "styled-components"

import { Label as BaseLabel } from "base_components/RootForm"

export const Root = styled.div`
  background: #f3f3f3;
  padding: 1.8em;
  margin-bottom: 2em;
`

export const P = styled.p`
  margin-bottom: 8px;
`

export const User = styled.div`
  & > div {
    margin-bottom: 5px;
  }

  & > div > div {
    margin-right: 17px;
  }

  & label {
    position: relative;
    top: -2px;
  }
`

export const PrivilegesLabel = styled(BaseLabel)`
  max-width: 107px;
`

export const Flex = styled.div`
  display: flex;
`

export const ListItemRoot = styled.div`
  display: flex;
  align-items: center;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  > label {
    padding-left: 14px;
    margin-bottom: 0;
    cursor: pointer;
  }
`
