import React from "react"
import PropTypes from "prop-types"

import BaseModal from "base_components/Modal"
import Button from "base_components/RootButton"
import { Text } from "base_components/RootForm"

import {
  Header as HeaderElement,
  H5,
  List,
  ListTitle,
  Hint,
  ListItem as ListItemElement,
  Checkbox,
  Avatar
} from "./elements"

import IconAdd from "react-icons/lib/md/add-circle-outline"

const ListItem = ({ name, avatar }) => (
  <ListItemElement>
    <Checkbox /> {avatar && <Avatar src={avatar} />} <div>{name}</div>
  </ListItemElement>
)

const Header = () => (
  <HeaderElement>
    <IconAdd color="#BFBFBF" fontSize={39} />{" "}
    <H5>Add user to administrators</H5>
  </HeaderElement>
)

const Body = ({ items }) => (
  <div>
    <Hint>
      Be careful - this will provide users access to everything related to this
      organization account
    </Hint>
    <ListTitle>Select a user to make an administrator</ListTitle>
    <List>
      {items.map(({ name, avatar }) => (
        <ListItem name={name} avatar={avatar} />
      ))}
    </List>
  </div>
)

const Footer = () => (
  <Button onClick={() => console.log("Create new course!")}>Add</Button>
)

const Modal = ({ items, handleClose, isOpen }) => (
  <BaseModal
    isOpen={isOpen}
    onClose={handleClose}
    header={<Header />}
    body={<Body items={items} />}
    footer={<Footer />}
  />
)

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Modal
