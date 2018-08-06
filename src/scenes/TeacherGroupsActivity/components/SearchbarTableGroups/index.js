import React from "react"

import SearchbarTable, {
  SearchbarButtonFilter
} from "base_components/SearchbarTable"

const SearchbarTableGroups = () => (
  <SearchbarTable>
    <SearchbarButtonFilter title="Show All" />
    <SearchbarButtonFilter title="Search by course" />
  </SearchbarTable>
)

export default SearchbarTableGroups
