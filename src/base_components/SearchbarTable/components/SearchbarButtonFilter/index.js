import React from "react"
import PropTypes from "prop-types"

import withStyleButton from "../withStyleButton"

const SearchbarButtonFilter = withStyleButton(({ className, title }) => (
  <button className={className}>{title}</button>
)).extend`
    margin-bottom: 0.5em;
    margin-right: 0.5em;
    border-radius: 4px;
    width: unset;
    min-width: 12%;
    
    @media screen and (min-width: 768px){
      padding: 10px 20px;
      margin-right: 1em;
    }
`

SearchbarButtonFilter.propTypes = {
  title: PropTypes.string.isRequired
}

export default SearchbarButtonFilter
