import styled from "styled-components"

import { CheckboxCircle } from "base_components/RootForm/components/Checkbox"

export const Answer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0 0 2em 0;

  color: #9c9c9c;
  font-size: 1.2em;
`

export const Answers = styled.div`
  display: flex;
  flex-direction: column;
`

export const Checkbox = styled(CheckboxCircle)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-right: 1em;

  width: 24px;
  height: 24px;

  border-width: 1px;
  border-style: solid;
  border-color: #979797;
  border-radius: 50%;

  input {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  }

  .Checkbox--circle + .Label--circle {
    margin: 0;

    width: 18px;
    height: 18px;
  }

  .Checkbox--circle:checked + .Label--circle {
    background-color: #0e90e0;
    border-color: #0e90e0;
  }
`

export const Label = styled.p`
  margin: 0 0 1.2em 0;

  color: #9c9c9c;
  font-style: italic;
  font-size: 0.875em;
`

export const Question = styled.h4`
  margin: 0 0 1.8em 0;

  font-size: 1.286em;
`
