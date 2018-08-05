import React from "react"

import Modal from "../GroupModal"

import { Root, List } from "./elements"
import { ButtonIcon } from "base_components/RootButton"
import IconAdd from "react-icons/lib/md/add"

import modal from "hoc/modal"

const AccountContainer = ({ onOpen, onClose, isOpen }) => (
  <Root
    title="Groups"
    AdditionalTitle={() => (
      <ButtonIcon onClick={onOpen} light lightBorder>
        <IconAdd /> Add group
      </ButtonIcon>
    )}
  >
    <List>
      <div>group1</div>
      <div>group2</div>
    </List>
    <Modal isOpen={isOpen} handleClose={onClose} />
  </Root>
)

export default modal(AccountContainer)
