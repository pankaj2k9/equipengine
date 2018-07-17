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

const SearchbarTableCourse = ({ isOpen, onOpen, onClose }) => (
  <SearchbarTable>
    <SearchbarButtonFilter title="Show All" />
    <SearchbarDropdownCourse />
    <SearchbarForm />
    <SettingsButton light onClick={onOpen}>
      <SttingsIcon fontSize={23} />Filter
    </SettingsButton>
    <Flagged className="Flagged" />
    <SettingsModal isOpen={isOpen} onClose={onClose} />
  </SearchbarTable>
)

export default modal(SearchbarTableCourse)
