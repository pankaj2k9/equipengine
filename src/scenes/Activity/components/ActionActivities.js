import React from "react"
import styled from "styled-components"

import SearchbarTable, {
  Flagged,
  SearchbarButtonFilter,
  SearchbarDropdown,
  SearchbarForm
} from "base_components/SearchbarTable"

const SearchbarButtonFilterLarger = styled(SearchbarButtonFilter)`
  width: 167px;
`

const ActionActivities = () => (
  <SearchbarTable noDesktopPadding>
    <SearchbarButtonFilter title="All" />
    <SearchbarButtonFilter title="Unread" />
    <SearchbarButtonFilterLarger title="Show by group" />
    <SearchbarDropdown title="Show by course" />
    <SearchbarForm placeholder="Search" />
    <Flagged />
  </SearchbarTable>
)

export default ActionActivities
