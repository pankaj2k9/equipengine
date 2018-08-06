import React from "react"

import SearchbarTable, {
  Flagged,
  SearchbarButtonFilter,
  SearchbarDropdownCourse,
  SearchbarForm
} from "base_components/SearchbarTable"
import SttingsIcon from "react-icons/lib/md/settings"

import SettingsModal from "scenes/TeacherControls/SettingsModal"

import { SettingsButton } from "./elements"

import modal from "hoc/modal"

const SearchbarTableCourse = ({
  handleSearchChange,
  isOpen,
  onOpen,
  onClose,
  searchValue
}) => (
  <SearchbarTable>
    <SearchbarButtonFilter title="Show All" />
    <SearchbarButtonFilter title="Search by course" />
    <SearchbarForm onChange={handleSearchChange} value={searchValue} />
    <SettingsButton light onClick={onOpen}>
      <SttingsIcon fontSize={23} />
      Filter
    </SettingsButton>
    <Flagged className="Flagged" />
    <SettingsModal isOpen={isOpen} onClose={onClose} />
  </SearchbarTable>
)

export default modal(SearchbarTableCourse)
