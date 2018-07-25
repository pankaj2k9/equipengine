import styled from "styled-components"
import { ListRowLeft, ListRowRight } from "base_components/List"
import LinkButton from "base_components/LinkButton"

export const StyledListRowLeft = styled(ListRowLeft)`
  @media screen and (min-width: 768px) {
    margin: 0 10px;
    flex: 1;
  }
`

export const StyledListRowRight = styled(ListRowRight)`
  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ViewButton = styled(LinkButton)`
  width: 100%;
`
