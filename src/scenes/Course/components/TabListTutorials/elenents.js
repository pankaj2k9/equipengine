import styled from "styled-components"
import LinkButton from "base_components/LinkButton"
import { ListRow, ListRowLeft, ListRowRight } from "base_components/List"

export const StyledListRow = styled(ListRow)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledListRowLeft = styled(ListRowLeft)`
  display: flex;
  img {
    margin-right: 1em;
  }
  p {
    margin-bottom: 0;
  }
`

export const StyledListRowRight = styled(ListRowRight)`
  margin-top: 0;
`

export const ViewButton = styled(LinkButton)`
  @media screen and (min-width: 768px) {
    width: 104px;
  }
`
