import React from "react"

import ContainerFlex from "base_components/ContainerFlex"
import { Desktop, Mobile } from "base_components/Responsive"
import { FormGroup, Label, Text } from "base_components/RootForm"
import iconUser from "resources/images/user.png"
import ItemFlex from "base_components/ItemFlex"
import UploadableAvatar from "base_components/UploadableAvatar"
import ResetPasswordModal from "base_components/ResetPasswordModal"

import modal from "hoc/modal"

import { ButtonSetPassword, Spacing } from "./elements"

const FirstName = ({ value, onChange }) => (
  <FormGroup flex={1}>
    <Label>
      First Name
      {onChange && "*"}
    </Label>
    <Text placeholder="First name" value={value} onChange={onChange} />
  </FormGroup>
)

const LastName = ({ value, onChange }) => (
  <FormGroup flex={1}>
    <Label>
      Last Name
      {onChange && "*"}
    </Label>
    <Text placeholder="Last name" value={value} onChange={onChange} />
  </FormGroup>
)

const EmailInput = ({ value, onChange }) => (
  <FormGroup>
    <Label>
      Email Address
      {onChange && "*"}
    </Label>
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

// TODO add loading to button when request is sending
// TODO merge SendResetPassword and ResetPassword buttons
const SendResetPasswordTokenButton = ({ onClick }) => (
  <ButtonSetPassword
    light
    lightBorder
    onClick={event => {
      event.preventDefault()
      onClick(event)
    }}
  >
    Send reset password token
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
  isOpen,
  resetPasswordExist,
  isAvatarEditable,
  onSendResetPasswordToken
}) => (
  <div>
    <Desktop>
      <ContainerFlex>
        <ItemFlex>
          <UploadableAvatar readOnly={!isAvatarEditable} image={iconUser} />
        </ItemFlex>
        <ItemFlex>
          <ContainerFlex>
            <FirstName onChange={changeFirstName} value={firstName} />
            <Spacing />
            <LastName onChange={changeLastName} value={lastName} />
          </ContainerFlex>
          <EmailInput onChange={changeEmail} value={email} />
          {resetPasswordExist && <ResetPasswordButton onClick={onOpen} />}
          {onSendResetPasswordToken && (
            <SendResetPasswordTokenButton onClick={onSendResetPasswordToken} />
          )}
        </ItemFlex>
      </ContainerFlex>
    </Desktop>
    <Mobile>
      <UploadableAvatar image={iconUser} />
      <FirstName onChange={changeFirstName} value={firstName} />
      <LastName onChange={changeLastName} value={lastName} />
      <EmailInput onChange={changeEmail} value={email} />
      {resetPasswordExist && <ResetPasswordButton onClick={onOpen} />}
      {onSendResetPasswordToken && (
        <SendResetPasswordTokenButton onClick={onSendResetPasswordToken} />
      )}
    </Mobile>
    <ResetPasswordModal isOpen={isOpen} handleClose={onClose} />
  </div>
)

export default modal(UserDetails)
