import React from "react"

import form from "hoc/form"
import { Root, StyledButton, StyledForm, StyledText } from "./elements"

// TODO try to merge with existing SearchbarTable
const SearchActionBar = ({
  fields: { term },
  onChange,
  onSearch,
  onCreate
}) => (
  <Root>
    <StyledButton
      secondary
      onClick={() => {
        onChange("", "term")
        onSearch("")
      }}
    >
      Show All
    </StyledButton>
    <StyledForm>
      <StyledText
        value={term}
        onChange={e => {
          onChange(e.target.value, "term")
          onSearch(e.target.value)
        }}
        placeholder="Search"
      />
    </StyledForm>
    {onCreate && <StyledButton onClick={onCreate}>Create</StyledButton>}
  </Root>
)

export default form({
  term: ""
})(SearchActionBar)
