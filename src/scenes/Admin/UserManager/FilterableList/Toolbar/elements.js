import styled from "styled-components"

import { ContainerSearchbarList } from "scenes/Admin/components/ContainerAdminPanel/components/ContainerFilterableList"

export const Root = styled(ContainerSearchbarList)`
  @media screen and (min-width: 768px) {
    & > * {
      height: 40px;
      width: 20% !important;
    }

    & > *:nth-child(3) {
      width: 35% !important;
    }
  }
`
