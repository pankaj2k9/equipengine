import React from "react"

import Modal from "../GroupModal"

import { Root, List } from "./elements"
import { ButtonIcon } from "base_components/RootButton"
import IconAdd from "react-icons/lib/md/add"

import modal from "hoc/modal"

const PanelGroups = ({
  groups,
  usersGroups,
  handleUserGroupsChange,
  onOpen,
  onClose,
  isOpen
}) => (
  <Root
    title="Groups"
    AdditionalTitle={() => (
      <ButtonIcon onClick={onOpen} light lightBorder>
        <IconAdd /> Add group
      </ButtonIcon>
    )}
  >
    <List>
      {usersGroups.length > 0 ? (
        usersGroups.map(group => <div key={group.id}>{group.title}</div>)
      ) : (
        <div>No groups selected</div>
      )}
    </List>

    <Modal
      isOpen={isOpen}
      handleClose={onClose}
      groups={groups}
      usersGroups={usersGroups}
      handleUserGroupsChange={handleUserGroupsChange}
    />
  </Root>
)

export default modal(PanelGroups)
