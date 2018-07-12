import React from "react"
import { compose, pure } from "recompose"
import styled from "styled-components"

import NumericInput from "react-numeric-input"

const NumberInput = props => <NumericInput {...props} />

export default compose(
  comp => styled(comp)`
    border: 1px solid #dddddd;
    padding: 0.8em 1em;
    border-radius: 3px;
    font-size: 14px;
    width: 100%;
    height: 40px;

    &:focus {
      outline: 0;
    }

    ::placeholder {
      color: #c0c0c0;
    }
  `,
  pure
)(NumberInput)
