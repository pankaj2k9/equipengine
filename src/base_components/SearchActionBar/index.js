import React from "react"
import { ADMIN_ROLE, STUDENT_ROLE, TEACHER_ROLE } from "services/constants"
import form from "hoc/form"
import {
  Root,
  StyledButton,
  StyledForm,
  StyledText,
  StyledDropdown
} from "./elements"

// TODO try to merge with existing SearchbarTable
const SearchActionBar = ({
  fields: { term, role },
  onChange,
  onSearch,
  onCreate
}) => (
  <Root>
    <StyledButton
      secondary
      onClick={() => {
        onChange("", "term")
        onChange("", "role")
        onSearch("")
      }}
    >
      Show All
    </StyledButton>
    <StyledDropdown
      placeholder="Refine"
      value={role}
      className={"width-sm"}
      onChange={e => {
        const value = e && e.value ? e.value : ""
        onChange(value, "role")
        onSearch({ role: value })
      }}
      options={[
        { label: "Student", value: STUDENT_ROLE },
        { label: "Teacher", value: TEACHER_ROLE },
        { label: "Admin", value: ADMIN_ROLE }
      ]}
    />
    <StyledForm>
      <StyledText
        value={term}
        onChange={e => {
          onChange(e.target.value, "term")
          onSearch({ term: e.target.value })
        }}
        placeholder="Search"
      />
    </StyledForm>
    {onCreate && <StyledButton onClick={onCreate}>Create</StyledButton>}
  </Root>
)

export default form({
  term: "",
  role: ""
})(SearchActionBar)
