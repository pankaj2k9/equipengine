import React from "react"
import styled from "styled-components"
import { compose, withStateHandlers } from "recompose"

import Button from "base_components/RootButton"
import IconUpload from "react-icons/lib/md/file-upload"

const simulateClick = el => {
  // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
  el.dispatchEvent(
    new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true
    })
  )
}

const upload = (e, input) => {
  if (e) e.preventDefault()

  simulateClick(input)
}

// TODO: Make handler to store attached files outside of component

// FIXME: We will fix the padding. The content is not slightly horizontally center.
const ButtonUpload = ({ className, setRef, setFile, file, inputRef }) => (
  <Button
    onClick={e => upload(e, inputRef)}
    type="file"
    light
    lightBorder
    className={className}
  >
    <input
      onChange={e => setFile(e.target.files[0])}
      ref={el => setRef(el)}
      type="file"
    />
    {file ? "File attached" : "Upload"}
    <i>
      <IconUpload />
    </i>
  </Button>
)

export default compose(
  withStateHandlers(
    {
      inputRef: null,
      file: null
    },
    {
      setRef: props => ref => ({
        ...props,
        inputRef: ref
      }),
      setFile: props => file => ({
        ...props,
        file
      })
    }
  ),
  comp => styled(comp)`
    color: #bdbdbd;
    border-color: #bdbdbd;
    padding: 0 0 5px 0;
    width: ${({ file }) => file && "132px"};

    i {
      font-size: 1.2rem;
      margin-left: 0.2em;
    }

    svg {
      vertical-align: text-bottom;
    }

    input[type="file"] {
      display: none;
    }
  `
)(ButtonUpload)
