import React from "react"
import styled from "styled-components"
//
import Button from "base_components/RootButton"
import IconUpload from "react-icons/lib/md/file-upload"

// FIXME: We will fix the padding. The content is not slightly horizontally center.
const ButtonUpload = styled(({ className, isFileAttached, ...rest }) => (
  <Button {...rest} type="file" light lightBorder className={className}>
    {isFileAttached ? "File attached" : "Upload"}
    <i>
      <IconUpload />
    </i>
  </Button>
))`
  color: #bdbdbd;
  border-color: #bdbdbd;
  padding: 0 0 5px 0;
  width: ${({ isFileAttached }) => isFileAttached && "126px"};

  i {
    font-size: 1.2rem;
    margin-left: 0.2em;
  }

  svg {
    vertical-align: text-bottom;
  }
`

export default ButtonUpload
