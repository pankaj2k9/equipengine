import styled from "styled-components"
import LinkButton from "base_components/LinkButton"
import { ListRow, ListRowLeft, ListRowRight } from "base_components/List"

export const EmptyTutorialsList = styled.div`
  @media screen and (min-width: 768px) {
    text-align: center;
  }
`

export const StyledListRow = styled(ListRow)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledListRowLeft = styled(ListRowLeft)`
  display: flex;
`

export const StyledListRowRight = styled(ListRowRight)`
  margin-top: 0;
`

export const ViewButton = styled(LinkButton)`
  @media screen and (min-width: 768px) {
    width: 104px;
  }
`
