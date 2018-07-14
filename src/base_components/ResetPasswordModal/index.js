import React from "react"
import PropTypes from "prop-types"
import { withStateHandlers } from "recompose"

import BaseModal from "base_components/Modal"
import Button from "base_components/RootButton"
import { Text, Label, FormGroup } from "base_components/RootForm"

import { Header as HeaderElement, H5 } from "./elements"

const Header = () => (
  <HeaderElement>
    <H5>Reset password</H5>
  </HeaderElement>
)

const Body = withStateHandlers(
  {
    oldPass: "",
    newPass: "",
    confirmPass: ""
  },
  {
    onChange: fields => ({ target: { value } }, selector) => ({
      ...fields,
      [selector]: value
    })
  }
)(({ oldPass, newPass, confirmPass, onChange }) => (
  <div>
    <FormGroup>
      <Label>Old password*</Label>
      <Text
        value={oldPass}
        onChange={e => onChange(e, "oldPass")}
        type="password"
      />
    </FormGroup>
    <FormGroup>
      <Label>New password*</Label>
      <Text
        value={newPass}
        onChange={e => onChange(e, "newPass")}
        type="password"
      />
    </FormGroup>
    <FormGroup>
      <Label>Confirm new password*</Label>
      <Text
        value={confirmPass}
        onChange={e => onChange(e, "confirmPass")}
        type="password"
      />
    </FormGroup>
  </div>
))

const Footer = ({ handleClose }) => (
  <Button onClick={handleClose}>Confirm</Button>
)

const Modal = ({ handleClose, isOpen }) => (
  <BaseModal
    isOpen={isOpen}
    onClose={handleClose}
    header={<Header />}
    body={<Body />}
    footer={<Footer handleClose={handleClose} />}
  />
)

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Modal
