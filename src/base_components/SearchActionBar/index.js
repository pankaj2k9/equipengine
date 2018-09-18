import PropTypes from "prop-types"
import React, { Component } from "react"

import form from "hoc/form"
import { ADMIN_ROLE, STUDENT_ROLE, TEACHER_ROLE } from "services/constants"

import {
  Root,
  StyledButton,
  StyledForm,
  StyledText,
  StyledDropdown
} from "./elements"

// TODO try to merge with existing SearchbarTable
class SearchActionBar extends Component {
  handleShowAll = () => {
    const { onChange, onSearch } = this.props

    onChange("", "term")
    onChange("", "role")
    onSearch({ term: null })
  }

  handleRefine = event => {
    const { onChange, onRefine } = this.props

    const value = event && event.value ? event.value : ""

    onChange(value, "role")
    onRefine(value)
  }

  handleSearch = event => {
    const { onChange, onSearch } = this.props

    const { value } = event.target

    onChange(value, "term")
    onSearch({ term: value })
  }

  render() {
    const {
      fields: { term, role },
      onCreate,
      onRefine
    } = this.props

    return (
      <Root>
        <StyledButton secondary onClick={this.handleShowAll}>
          Show All
        </StyledButton>

        {onRefine && (
          <StyledDropdown
            placeholder="Refine"
            value={role}
            className="width-sm"
            onChange={this.handleRefine}
            options={[
              { label: "Student", value: STUDENT_ROLE },
              { label: "Teacher", value: TEACHER_ROLE },
              { label: "Admin", value: ADMIN_ROLE }
            ]}
          />
        )}

        <StyledForm>
          <StyledText
            value={term}
            onChange={this.handleSearch}
            placeholder="Search"
          />
        </StyledForm>

        {onCreate && <StyledButton onClick={onCreate}>Create</StyledButton>}
      </Root>
    )
  }
}

SearchActionBar.propTypes = {
  onRefine: PropTypes.func,
  onSearch: PropTypes.func
}

SearchActionBar.defaultProps = {
  onRefine: () => {},
  onSearch: () => {}
}

export default form({
  term: "",
  role: ""
})(SearchActionBar)
