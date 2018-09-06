import React from "react"

import SearchbarTable, {
  SearchbarButtonFilter
} from "base_components/SearchbarTable"

const SearchBarTableGroups = () => (
  <SearchbarTable>
    <SearchbarButtonFilter title="Show All" />
    <SearchbarButtonFilter title="Search by course" />
  </SearchbarTable>
)

export default SearchBarTableGroups
