import React from "react"

import ContainerFlex from "base_components/ContainerFlex"
import { Desktop, Mobile } from "base_components/Responsive"
import { FormGroup, Label, Text } from "base_components/RootForm"
import iconUser from "resources/images/user.png"
import ItemFlex from "base_components/ItemFlex"
import UploadableAvatar from "base_components/UploadableAvatar"

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

const ResetPasswordButton = () => (
  <ButtonSetPassword light lightBorder onClick={this.handleResetPasswordClick}>
    Reset password
  </ButtonSetPassword>
)

const UserDetails = ({
  firstName,
  lastName,
  email,
  changeFirstName,
  changeLastName,
  changeEmail
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
          <ResetPasswordButton />
        </ItemFlex>
      </ContainerFlex>
    </Desktop>
    <Mobile>
      <UploadableAvatar image={iconUser} />
      <FirstName onChange={changeFirstName} value={firstName} />
      <LastName onChange={changeLastName} value={lastName} />
      <EmailInput onChange={changeEmail} value={email} />
      <ResetPasswordButton />
    </Mobile>
  </div>
)

export default UserDetails
