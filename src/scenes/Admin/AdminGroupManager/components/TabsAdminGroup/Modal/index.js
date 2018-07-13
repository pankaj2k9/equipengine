import React from "react"
import PropTypes from "prop-types"

import BaseModal from "base_components/Modal"
import Button from "base_components/RootButton"
import { Text } from "base_components/RootForm"

import {
  Header as HeaderElement,
  H5,
  BodyLabel,
  List,
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

const Header = ({ text }) => (
  <HeaderElement>
    <IconAdd color="#BFBFBF" fontSize={39} /> <H5>{text}</H5>
  </HeaderElement>
)

const Body = ({ items, placeholder, text }) => (
  <div>
    <BodyLabel>{text}</BodyLabel>
    <Text placeholder={placeholder} />
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

const Modal = ({
  items,
  handleClose,
  isOpen,
  searchBarPlaceholder,
  headerText,
  bodyLabel
}) => (
  <BaseModal
    isOpen={isOpen}
    onClose={handleClose}
    header={<Header text={headerText} />}
    body={
      <Body items={items} placeholder={searchBarPlaceholder} text={bodyLabel} />
    }
    footer={<Footer />}
  />
)

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string
    })
  ).isRequired,
  searchBarPlaceholder: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  bodyLabel: PropTypes.string.isRequired
}

export default Modal
