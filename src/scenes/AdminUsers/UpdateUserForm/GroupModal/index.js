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

const groups = [
  {
    name: "group 1"
  },
  {
    name: "group 2"
  }
]

const ListItem = ({ name }) => (
  <ListItemElement>
    <Checkbox id={name} />
    <Label htmlFor={name}>{name}</Label>
  </ListItemElement>
)

const Header = () => (
  <HeaderElement>
    <IconAdd color="#BFBFBF" fontSize={39} /> <H5>Add group</H5>
  </HeaderElement>
)

const Body = () => (
  <div>
    <List>
      {groups.map(({ name }) => (
        <ListItem name={name} />
      ))}
    </List>
  </div>
)

const Footer = () => <Button>Add</Button>

const Modal = ({ handleClose, isOpen }) => (
  <BaseModal
    isOpen={isOpen}
    onClose={handleClose}
    header={<Header />}
    body={<Body />}
    footer={<Footer />}
  />
)

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Modal
