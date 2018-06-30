import css from "utils/css"
import { FormGroup } from "base_components/RootForm"

// FormGroupDropdown component
export const FormGroupDropdown = css`
  flex: 1;
  margin-right: 0.6em;

  .Select-control {
    height: 40px;
  }
`(FormGroup)

// for zip code text
// FormGroupZipCode component
export const FormGroupZipCode = css`
  width: 25%;
`(FormGroup)
