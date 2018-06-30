import React, { Component } from "react"
import styled from "styled-components"

import ContainerFlex from "base_components/ContainerFlex"
import { Desktop, Mobile } from "base_components/Responsive"
import { FormGroup, Label, Text } from "base_components/RootForm"
import iconUser from "resources/images/user.png"
import UploadableAvatar from "base_components/UploadableAvatar"

const Spacing = styled.span`
  margin-right: 0.7em;
`

class UserDetails extends Component {
  handleFirstNameChange = ({ target: { value } }) =>
    this.props.onFirstNameChange(value)
  handleLastNameChange = ({ target: { value } }) =>
    this.props.onLastNameChange(value)
  handleEmailChange = ({ target: { value } }) => this.props.onEmailChange(value)

  renderFirstNameInput = value => (
    <FormGroup>
      <Label>First Name*</Label>
      <Text
        placeholder="First name"
        value={value}
        onChange={this.handleFirstNameChange}
      />
    </FormGroup>
  )

  renderLastNameInput = value => (
    <FormGroup>
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

  render() {
    const { firstName, lastName, email } = this.props
    return (
      <div>
        <Desktop>
          <ContainerFlex>
            <UploadableAvatar image={iconUser} />
            <div>
              <ContainerFlex>
                {this.renderFirstNameInput(firstName)}
                <Spacing />
                {this.renderLastNameInput(lastName)}
              </ContainerFlex>
              {this.renderEmailInput(email)}
            </div>
          </ContainerFlex>
        </Desktop>
        <Mobile>
          <UploadableAvatar image={iconUser} />
          {this.renderFirstNameInput(firstName)}
          {this.renderLastNameInput(lastName)}
          {this.renderEmailInput(email)}
        </Mobile>
      </div>
    )
  }
}

export default UserDetails
