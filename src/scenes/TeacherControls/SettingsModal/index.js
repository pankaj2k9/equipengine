import React from "react"
import PropTypes from "prop-types"

import BaseModal from "base_components/Modal"
import Button from "base_components/RootButton"
import { Checkbox, Label } from "base_components/RootForm"

import {
  HeaderRoot,
  Label as LabelElement,
  SubLabel,
  ListContainer,
  ListItemRoot,
  FilterContainer
} from "./elements"

import SettingsIcon from "react-icons/lib/md/settings"

const Header = () => (
  <HeaderRoot>
    <SettingsIcon color="#8D8D8D" fontSize={31} />
    <div>Filter and Notification Settings for Submissions</div>
  </HeaderRoot>
)

const ListItem = ({ id }) => (
  <ListItemRoot>
    <Checkbox id={id} />
    <Label htmlFor={id}>Communication and Culture</Label>
  </ListItemRoot>
)

const Body = () => (
  <div>
    <LabelElement>By course</LabelElement>
    <SubLabel>Select the course/s you want to display</SubLabel>
    <ListContainer>
      <ListItem id="0" />
      <ListItem id="1" />
    </ListContainer>
    <LabelElement>By person</LabelElement>
    <SubLabel>Select the person/s you want to display</SubLabel>
    <ListContainer>
      <ListItem id="2" />
      <ListItem id="3" />
    </ListContainer>
    <FilterContainer>
      <Button light lightBorder>
        Show all
      </Button>
      <div>Reset the filter - display all.</div>
    </FilterContainer>
  </div>
)

const Footer = () => (
  <div>
    <Button>Update</Button>
  </div>
)

const Modal = ({ onClose, isOpen }) => (
  <BaseModal
    isOpen={isOpen}
    onClose={onClose}
    header={<Header />}
    body={<Body />}
    footer={<Footer />}
  />
)

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Modal
