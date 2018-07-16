import React from "react"

import SearchbarTable, {
  Flagged,
  SearchbarButtonFilter,
  SearchbarDropdownCourse,
  SearchbarDropdownLesson,
  SearchbarForm
} from "base_components/SearchbarTable"
import SttingsIcon from "react-icons/lib/md/settings"

import { SettingsButton } from "./elements"

const SearchbarTableCourse = () => (
  <SearchbarTable>
    <SearchbarButtonFilter title="Show All" />
    <SearchbarDropdownCourse />
    <SearchbarDropdownLesson />
    <SearchbarForm />
    <SettingsButton light>
      <SttingsIcon fontSize={23} />Filter
    </SettingsButton>
    <Flagged className="Flagged" />
  </SearchbarTable>
)

export default SearchbarTableCourse
