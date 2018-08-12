import React from "react"
import styled from "styled-components"

import Button from "base_components/RootButton"

const DeleteButton = styled(Button)`
  background-color: #b4b4b4;

  &:hover {
    background-color: #777;
  }
`

const Footer = ({ className, onSubmit, onDelete, isSubmitting }) => (
  <div className={className}>
    <Button disabled={isSubmitting} onClick={onSubmit}>
      Save
    </Button>
    <DeleteButton disabled={isSubmitting} onClick={onDelete}>
      Delete video
    </DeleteButton>
  </div>
)

export default styled(Footer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
