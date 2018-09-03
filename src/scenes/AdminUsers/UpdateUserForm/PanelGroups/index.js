import React from "react"

import Modal from "../GroupModal"

import { Root, List } from "./elements"
import { ButtonIcon } from "base_components/RootButton"
import IconAdd from "react-icons/lib/md/add"

import modal from "hoc/modal"

const AccountContainer = ({
  onOpen,
  onClose,
  isOpen,
  groups,
  selectedGroupIds = [],
  onChange
}) => (
  <Root
    title="Groups"
    AdditionalTitle={() => (
      <ButtonIcon onClick={onOpen} light lightBorder>
        <IconAdd /> Add group
      </ButtonIcon>
    )}
  >
    {groups && groups.length > 0 && selectedGroupIds.length > 0 ? (
      selectedGroupIds.map(groupId => {
        const group = groups.find(group => group.id === groupId)
        let html = ""
        if (group) {
          html = <div>{group.title}</div>
        }
        return html
      })
    ) : (
      <div>No groups selected</div>
    )}
    <Modal
      isOpen={isOpen}
      handleClose={onClose}
      groups={groups}
      selectedGroupIds={selectedGroupIds}
      onChange={onChange}
      onSubmit={onClose}
    />
  </Root>
)

export default modal(AccountContainer)
