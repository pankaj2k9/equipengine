import React from "react"
import styled from "styled-components"

import { FlaggedIcon } from "base_components/SearchbarTable"
import RootForm, { Checkbox } from "base_components/RootForm"

const Flagged = styled(({ className }) => (
  <div className={className}>
    <RootForm>
      <Checkbox name="show-flagged" />
    </RootForm>
    <FlaggedIcon isFlagged />
    <span className="Flagged__total">(12)</span>
  </div>
))`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5em;

  & > span,
  & > img {
    margin-left: 0.5em;
  }

  .Checkbox + label:after {
    top: 4px;
    left: 5px;
  }

  .Flagged__total {
    color: #b5b5b5;
    font-size: 12px;
    font-weight: 800;
  }

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`

export default Flagged
