import React from "react"
import PropTypes from "prop-types"

import BaseModal from "base_components/Modal"
import Button from "base_components/RootButton"
import MultiSelect from "base_components/MultiSelect"
import { Label, TextArea } from "base_components/RootForm"
import FileChooserDialog from "base_components/FileChooser"

import { HeaderRoot, FooterRoot, FormGroup, AttachmentButton } from "./elements"

import messageIcon from "./MessageIcon.svg"

import { openFileChooser } from "utils/formFunctions"

const users = [
  { label: "user1", value: "user1" },
  { label: "user2", value: "user2" },
  { label: "user3", value: "user3" },
  { label: "user4", value: "user4" }
]

const Header = () => (
  <HeaderRoot>
    <img src={messageIcon} alt="new-message-icon" />
    <div>New Message</div>
  </HeaderRoot>
)

const Body = ({ message, onChange }) => (
  <div>
    <FormGroup>
      <Label>Send new message to:</Label>
      <MultiSelect onChange={console.log} options={users} />
    </FormGroup>
    <FormGroup>
      <TextArea
        value={message}
        onChange={({ target: { value } }) => onChange(value, "message")}
        rows={30}
        placeholder="Write your message..."
      />
    </FormGroup>
  </div>
)

const Footer = ({ onChange, attachmentRef }) => (
  <FooterRoot>
    <AttachmentButton onClick={e => openFileChooser(e, attachmentRef)} />
    <Button>Submit</Button>
    <FileChooserDialog
      onChooseFiles={files => onChange(files[0], "logo")}
      ref={attachmentRef}
    />
  </FooterRoot>
)

const Modal = ({ onClose, isOpen, message, attachmentRef, onChange }) => (
  <BaseModal
    isOpen={isOpen}
    onClose={onClose}
    header={<Header />}
    body={<Body message={message} onChange={onChange} />}
    footer={<Footer onChange={onChange} attachmentRef={attachmentRef} />}
  />
)

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Modal
