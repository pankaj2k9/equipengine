import React from "react"
import PropTypes from "prop-types"

import BaseModal from "base_components/Modal"
import Button from "base_components/RootButton"
import { Text } from "base_components/RootForm"

import {
  Header as HeaderElement,
  H5,
  List,
  ListItem as ListItemElement,
  ListItemLabel,
  Checkbox
} from "./elements"

import IconAdd from "react-icons/lib/md/add-circle-outline"

const ListItem = ({ name }) => (
  <ListItemElement>
    <Checkbox /> <ListItemLabel>{name}</ListItemLabel>
  </ListItemElement>
)

const Header = () => (
  <HeaderElement>
    <IconAdd color="#BFBFBF" fontSize={39} /> <H5>Add course to group</H5>
  </HeaderElement>
)

const Body = ({ courses }) => (
  <div>
    <Text placeholder="Search courses" />
    <List>{courses.map(({ name }) => <ListItem name={name} />)}</List>
  </div>
)

const Footer = () => (
  <Button onClick={() => console.log("Create new course!")}>Create</Button>
)

const Modal = ({ courses, handleClose, isOpen }) => (
  <BaseModal
    isOpen={isOpen}
    onClose={handleClose}
    header={<Header />}
    body={<Body courses={courses} />}
    footer={<Footer />}
  />
)

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  // TODO: make shaped type
  courses: PropTypes.array.isRequired
}

export default Modal
