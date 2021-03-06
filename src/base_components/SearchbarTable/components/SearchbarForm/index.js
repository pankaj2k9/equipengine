import React from "react"
import styled from "styled-components"

import RootForm, { Text } from "base_components/RootForm"

const StyledForm = styled(RootForm)`
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-right: 1em;
    margin-bottom: 0.3em;
  }
`
const SearchbarForm = ({ placeholder, value, onChange }) => (
  <StyledForm>
    <Text
      name="person"
      placeholder={placeholder || "Show by person..."}
      onChange={onChange}
      value={value}
    />
  </StyledForm>
)

export default SearchbarForm
