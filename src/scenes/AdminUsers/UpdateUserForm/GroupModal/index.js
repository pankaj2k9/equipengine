import React from "react"
import PropTypes from "prop-types"

import BaseModal from "base_components/Modal"
import Button from "base_components/RootButton"
import { Label } from "base_components/RootForm"

import {
  Header as HeaderElement,
  H5,
  List,
  ListItem as ListItemElement,
  Checkbox
} from "./elements"

import IconAdd from "react-icons/lib/md/add-circle-outline"

const Header = () => (
  <HeaderElement>
    <IconAdd color="#BFBFBF" fontSize={39} /> <H5>Add group</H5>
  </HeaderElement>
)

const Body = ({ groups, usersGroups, handleUserGroupsChange }) => (
  <List>
    {groups.map(({ id, title }) => (
      <ListItemElement key={`group-${id}`}>
        <Checkbox
          id={`group-${id}`}
          name={`group-${id}`}
          checked={usersGroups.find(group => group.id === id)}
          onClick={handleUserGroupsChange}
        />
        <Label htmlFor={`group-${id}`}>{title}</Label>
      </ListItemElement>
    ))}
  </List>
)

const Footer = ({ handleClose }) => <Button onClick={handleClose}>Add</Button>

const Modal = ({
  groups,
  usersGroups,
  handleClose,
  isOpen,
  handleUserGroupsChange
}) => (
  <BaseModal
    isOpen={isOpen}
    onClose={handleClose}
    header={<Header />}
    body={
      <Body
        groups={groups}
        usersGroups={usersGroups}
        handleUserGroupsChange={handleUserGroupsChange}
      />
    }
    footer={<Footer handleClose={handleClose} />}
  />
)

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Modal
