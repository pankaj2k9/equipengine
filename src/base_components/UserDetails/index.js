import React, { Component } from "react"
import styled from "styled-components"

import Button from "base_components/RootButton"
import ContainerFlex from "base_components/ContainerFlex"
import { Desktop, Mobile } from "base_components/Responsive"
import { FormGroup, Label, Text } from "base_components/RootForm"
import iconUser from "resources/images/user.png"
import ItemFlex from "base_components/ItemFlex"
import UploadableAvatar from "base_components/UploadableAvatar"

// extending for button set password
const ButtonSetPassword = Button.extend`
  width: inherit;
  padding: 10px;
`

const Spacing = styled.span`
  margin-right: 0.7em;
`

class UserDetails extends Component {
  handleFirstNameChange = ({ target: { value } }) =>
    this.props.onFirstNameChange(value)
  handleLastNameChange = ({ target: { value } }) =>
    this.props.onLastNameChange(value)
  handleEmailChange = ({ target: { value } }) => this.props.onEmailChange(value)
  handleResetPasswordClick = () => this.props.onResetPasswordClick()

  renderFirstNameInput = value => (
    <FormGroup flex={1}>
      <Label>First Name*</Label>
      <Text
        placeholder="First name"
        value={value}
        onChange={this.handleFirstNameChange}
      />
    </FormGroup>
  )

  renderLastNameInput = value => (
    <FormGroup flex={1}>
      <Label>Last Name*</Label>
      <Text
        placeholder="Last name"
        value={value}
        onChange={this.handleLastNameChange}
      />
    </FormGroup>
  )

  renderEmailInput = value => (
    <FormGroup>
      <Label>Email Address*</Label>
      <Text
        placeholder="Email Address"
        type="email"
        value={value}
        onChange={this.handleEmailChange}
      />
    </FormGroup>
  )

  renderResetPasswordButton = () => (
    <ButtonSetPassword
      light
      lightBorder
      onClick={this.handleResetPasswordClick}
    >
      Reset password
    </ButtonSetPassword>
  )

  render() {
    const { firstName, lastName, email } = this.props
    return (
      <div>
        <Desktop>
          <ContainerFlex>
            <ItemFlex>
              <UploadableAvatar image={iconUser} />
            </ItemFlex>
            <ItemFlex>
              <ContainerFlex>
                {this.renderFirstNameInput(firstName)}
                <Spacing />
                {this.renderLastNameInput(lastName)}
              </ContainerFlex>
              {this.renderEmailInput(email)}
              {this.renderResetPasswordButton()}
            </ItemFlex>
          </ContainerFlex>
        </Desktop>
        <Mobile>
          <UploadableAvatar image={iconUser} />
          {this.renderFirstNameInput(firstName)}
          {this.renderLastNameInput(lastName)}
          {this.renderEmailInput(email)}
          {this.renderResetPasswordButton()}
        </Mobile>
      </div>
    )
  }
}

export default UserDetails
