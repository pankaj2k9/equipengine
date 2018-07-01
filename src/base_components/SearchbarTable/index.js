import PropTypes from "prop-types"
import styled from "styled-components"

import Flagged from "./components/Flagged"
import FlaggedIcon from "./components/FlaggedIcon"
import SearchbarButtonFilter from "./components/SearchbarButtonFilter"
import SearchbarDropdown from "./components/SeachbarDropdown"
import SearchbarDropdownCourse from "./components/SearchbarDropdownCourse"
import SearchbarDropdownLesson from "./components/SearchbarDropdownLesson"
import SearchbarForm from "./components/SearchbarForm"
import { $borderLightColor } from "shared/color"

// creating styled component for searchbar container
const SearchbarTable = styled.div`
  border-bottom: 1px solid ${$borderLightColor};
  padding: 2%;
  margin-top: 3%;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    display: flex;
    align-items: center;
    padding: ${props => (props.noDesktopPadding ? "2%" : "27px 40px")};
  }
`

SearchbarTable.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
}

export {
  SearchbarTable as default,
  SearchbarButtonFilter,
  SearchbarDropdown,
  SearchbarDropdownCourse,
  SearchbarDropdownLesson,
  SearchbarForm,
  Flagged,
  FlaggedIcon
}
