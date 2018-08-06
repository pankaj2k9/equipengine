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

const ActionActivities = ({ searchValue, handleSearchChange }) => (
  <SearchbarTable noDesktopPadding>
    <SearchbarButtonFilter title="Show All" />
    <SearchbarButtonFilter title="Unread" />
    <SearchbarButtonFilterLarger title="Show by group" />
    <SearchbarButtonFilterLarger title="Show by course" />
    <SearchbarForm
      onChange={handleSearchChange}
      placeholder="Search"
      value={searchValue}
    />
    <Flagged />
  </SearchbarTable>
)

export default ActionActivities
