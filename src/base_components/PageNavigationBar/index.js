import React from "react"

import Button from "base_components/RootButton"
import { Root } from "./elements"

// TODO probably send pagination as a parameter to automatically detect disable state
const PageNavigationBar = ({
  disabledPrevious,
  disabledNext,
  onPreviousClick,
  onNextClick
}) => (
  <Root>
    <Button disabled={disabledPrevious} secondary onClick={onPreviousClick}>
      &#60; Previous
    </Button>
    <Button disabled={disabledNext} secondary onClick={onNextClick}>
      Next &#62;
    </Button>
  </Root>
)

export default PageNavigationBar
