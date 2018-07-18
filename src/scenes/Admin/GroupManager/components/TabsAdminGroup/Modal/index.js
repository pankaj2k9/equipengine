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
  Checkbox,
  Avatar
} from "./elements"

import IconAdd from "react-icons/lib/md/add-circle-outline"
import form from "hoc/form"

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

const Body = form({ term: "" })(
  ({ items, placeholder, fields: { term }, onChange }) => (
    <div>
      <Text
        value={term}
        onChange={e => onChange(e.target.value, "term")}
        placeholder={placeholder}
      />
      <List>
        {items.map(({ name, avatar }) => (
          <ListItem name={name} avatar={avatar} />
        ))}
      </List>
    </div>
  )
)

const Footer = () => (
  <Button onClick={() => console.log("Create new course!")}>Add</Button>
)

const Modal = ({
  items,
  handleClose,
  isOpen,
  searchBarPlaceholder,
  headerText
}) => (
  <BaseModal
    isOpen={isOpen}
    onClose={handleClose}
    header={<Header text={headerText} />}
    body={<Body items={items} placeholder={searchBarPlaceholder} />}
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
  headerText: PropTypes.string.isRequired
}

export default Modal
