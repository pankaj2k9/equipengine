import React from "react"
import PropTypes from "prop-types"
import {
  compose,
  withStateHandlers,
  withHandlers,
  pure,
  withProps,
  mapProps
} from "recompose"

import BaseModal from "base_components/Modal"
import Button from "base_components/RootButton"

import {
  Header as HeaderElement,
  H5,
  List,
  ListTitle,
  Hint,
  ListItem as ListItemElement,
  Checkbox,
  Avatar,
  ListItemLabel
} from "./elements"

import IconAdd from "react-icons/lib/md/add-circle-outline"
import { Label } from "base_components/RootForm"

const ListItem = ({
  user: { name, avatar, id, isSelected },
  select,
  deselect
}) => {
  const toggle = () => (isSelected ? deselect(id) : select(id))

  return (
    <ListItemElement>
      <Checkbox checked={isSelected} onChange={toggle} />{" "}
      <ListItemLabel onClick={toggle}>
        {avatar && <Avatar src={avatar} />} <div>{name}</div>
      </ListItemLabel>
    </ListItemElement>
  )
}

const Header = () => (
  <HeaderElement>
    <IconAdd color="#BFBFBF" fontSize={39} />{" "}
    <H5>Add user to administrators</H5>
  </HeaderElement>
)

const Body = ({ users, select, deselect }) => (
  <div>
    <Hint>
      Be careful - this will provide users access to everything related to this
      organization account
    </Hint>
    <ListTitle>Select a user to make an administrator</ListTitle>
    <List>
      {!users.length && "No users"}
      {users.map(user => (
        <ListItem select={select} deselect={deselect} user={user} />
      ))}
    </List>
  </div>
)

const Footer = ({ onSubmit }) => <Button onClick={onSubmit}>Add</Button>

const Modal = ({ users, handleClose, isOpen, select, deselect, onSubmit }) => (
  <BaseModal
    isOpen={isOpen}
    onClose={handleClose}
    header={<Header />}
    body={<Body select={select} deselect={deselect} users={users} />}
    footer={<Footer onSubmit={onSubmit} />}
  />
)

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default compose(
  withStateHandlers(
    {
      selectedIds: []
    },
    {
      select: ({ selectedIds }) => idSelect => ({
        selectedIds: selectedIds.concat(idSelect)
      }),
      deselect: ({ selectedIds }) => idDeselect => ({
        selectedIds: selectedIds.filter(id => id !== idDeselect)
      }),
      // Modal does not unmount, so we clear state when it closing
      clear: () => () => ({ selectedIds: [] })
    }
  ),
  withHandlers({
    // We must keep this method in separated "withHandlers"
    handleClose: ({ handleClose, clear }) => () => {
      clear()
      handleClose()
    }
  }),
  withHandlers({
    onSubmit: ({ onSubmit, selectedIds, handleClose }) => e => {
      e.preventDefault()

      onSubmit(selectedIds)

      handleClose()
    }
  }),
  mapProps(({ selectedIds, users, ...rest }) => ({
    users: users.map(user => ({
      ...user,
      isSelected: !!selectedIds.find(id => id === user.id)
    })),
    selectedIds,
    ...rest
  })),
  pure
)(Modal)
