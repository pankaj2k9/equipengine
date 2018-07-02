import React from "react"

import SearchbarTable, {
  Flagged,
  SearchbarButtonFilter,
  SearchbarDropdown,
  SearchbarForm
} from "base_components/SearchbarTable"

const ActionActivities = () => (
  <SearchbarTable noDesktopPadding>
    <SearchbarButtonFilter title="All" />
    <SearchbarButtonFilter title="Unread" />
    <SearchbarDropdown title="Show by group" />
    <SearchbarDropdown title="Show by course" />
    <SearchbarForm placeholder="Search" />
    <Flagged />
  </SearchbarTable>
)

export default ActionActivities
