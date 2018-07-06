import styled from "styled-components"
import List, { ListRowLeft, ListRowRight } from "base_components/List"
import LinkButton from "base_components/LinkButton"

export const StyledList = styled(List)`
  margin-top: 27px;
`

export const StyledListRowLeft = styled(ListRowLeft)`
  @media screen and (min-width: 768px) {
    margin: 0 10px;
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
