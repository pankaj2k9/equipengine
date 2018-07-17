import React from "react"
import { compose } from "recompose"

import ListItem from "./ListItem"
import NewMessageModal from "../NewMessageModal"

import { Header, ListRoot } from "./elements"

import Button from "base_components/RootButton"

import modal from "hoc/modal"

import form from "hoc/form"

const MessagesSidebar = ({
  isOpen,
  onOpen,
  onClose,
  fields: { message },
  refs: { attachment: attachmentRef },
  onChange
}) => {
  return (
    <div>
      <Header>
        <Button onClick={onOpen} light lightBorder>
          New Message
        </Button>
      </Header>
      <ListRoot>
        <ListItem />
      </ListRoot>
      <NewMessageModal
        message={message}
        attachmentRef={attachmentRef}
        onChange={onChange}
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  )
}

export default compose(
  modal,
  form(
    {
      message: "",
      attachment: null
    },
    ["attachment"]
  )
)(MessagesSidebar)
