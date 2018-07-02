import React from "react"

import SearchbarTable, {
  Flagged,
  SearchbarButtonFilter,
  SearchbarDropdownCourse,
  SearchbarDropdownLesson,
  SearchbarForm
} from "base_components/SearchbarTable"

const SearchbarTableCourse = () => (
  <SearchbarTable>
    <SearchbarButtonFilter title="Show All" />
    <SearchbarDropdownCourse />
    <SearchbarDropdownLesson />
    <SearchbarForm />
    <Flagged className="Flagged" />
  </SearchbarTable>
)

export default SearchbarTableCourse
