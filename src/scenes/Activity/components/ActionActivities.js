import React from "react"
import styled from "styled-components"

import SearchbarTable, {
  Flagged,
  SearchbarButtonFilter,
  SearchbarForm
} from "base_components/SearchbarTable"

const SearchbarButtonFilterLarger = styled(SearchbarButtonFilter)`
  min-width: 19%;
`

const ActionActivities = () => (
  <SearchbarTable noDesktopPadding>
    <SearchbarButtonFilter title="Show All" />
    <SearchbarButtonFilter title="Unread" />
    <SearchbarButtonFilterLarger title="Show by group" />
    <SearchbarButtonFilterLarger title="Show by course" />
    <SearchbarForm placeholder="Search" />
    <Flagged />
  </SearchbarTable>
)

export default ActionActivities
