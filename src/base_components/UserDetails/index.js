import React from "react"

import ContainerFlex from "base_components/ContainerFlex"
import { Desktop, Mobile } from "base_components/Responsive"
import { FormGroup, Label, Text } from "base_components/RootForm"
import iconUser from "resources/images/user.png"
import ItemFlex from "base_components/ItemFlex"
import UploadableAvatar from "base_components/UploadableAvatar"
import ResetPasswordModal from "base_components/ResetPasswordModal"

import modal from "hoc/modal"

import { ButtonSetPassword, Spacing } from "./elemenst"

const FirstName = ({ value, onChange }) => (
  <FormGroup flex={1}>
    <Label>First Name*</Label>
    <Text placeholder="First name" value={value} onChange={onChange} />
  </FormGroup>
)

const LastName = ({ value, onChange }) => (
  <FormGroup flex={1}>
    <Label>Last Name*</Label>
    <Text placeholder="Last name" value={value} onChange={onChange} />
  </FormGroup>
)

const EmailInput = ({ value, onChange }) => (
  <FormGroup>
    <Label>Email Address*</Label>
    <Text
      placeholder="Email Address"
      type="email"
      value={value}
      onChange={onChange}
    />
  </FormGroup>
)

const ResetPasswordButton = ({ onClick }) => (
  <ButtonSetPassword light lightBorder onClick={onClick}>
    Reset password
  </ButtonSetPassword>
)

const UserDetails = ({
  firstName,
  lastName,
  email,
  changeFirstName,
  changeLastName,
  changeEmail,
  onOpen,
  onClose,
  isOpen
}) => (
  <div>
    <Desktop>
      <ContainerFlex>
        <ItemFlex>
          <UploadableAvatar image={iconUser} />
        </ItemFlex>
        <ItemFlex>
          <ContainerFlex>
            <FirstName onChange={changeFirstName} value={firstName} />
            <Spacing />
            <LastName onChange={changeLastName} value={lastName} />
          </ContainerFlex>
          <EmailInput onChange={changeEmail} value={email} />
          <ResetPasswordButton onClick={onOpen} />
        </ItemFlex>
      </ContainerFlex>
    </Desktop>
    <Mobile>
      <UploadableAvatar image={iconUser} />
      <FirstName onChange={changeFirstName} value={firstName} />
      <LastName onChange={changeLastName} value={lastName} />
      <EmailInput onChange={changeEmail} value={email} />
      <ResetPasswordButton onClick={() => onOpen} />
    </Mobile>
    <ResetPasswordModal isOpen={isOpen} handleClose={onClose} />
  </div>
)

export default modal(UserDetails)
