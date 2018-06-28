import React, { Component } from 'react'
import styled from 'styled-components'

import ContainerFlex from 'base_components/ContainerFlex'
import { FormGroup, Label, Text } from 'base_components/RootForm'
import iconUser from 'resources/images/user.png'
import UserAvatar from 'base_components/UserAvatar'

const Spacing = styled.span`
  margin-right: 0.7em;
`

const FormUserAvatar = UserAvatar.extend`
  width: 98px;
  height: 98px;
  margin-right: 1.2em;
`

class UserDetails extends Component {
  handleFirstNameChange = ({ target: { value } }) =>
    this.props.onFirstNameChange(value)
  handleLastNameChange = ({ target: { value } }) =>
    this.props.onLastNameChange(value)
  handleEmailChange = ({ target: { value } }) =>
    this.props.onEmailChange(value)

  render () {
    const { firstName, lastName, email } = this.props
    return (
      <ContainerFlex>
        <FormUserAvatar image={iconUser} />
        <div>
          <ContainerFlex>
            <FormGroup>
              <Label>First Name</Label>
              <Text
                placeholder='First name'
                value={firstName}
                onChange={this.handleFirstNameChange}
              />
            </FormGroup>
            <Spacing />
            <FormGroup>
              <Label>Last Name</Label>
              <Text
                placeholder='Last name'
                value={lastName}
                onChange={this.handleLastNameChange}
              />
            </FormGroup>
          </ContainerFlex>
          <FormGroup>
            <Label>Email Address</Label>
            <Text
              placeholder='Email Address'
              type='email'
              value={email}
              onChange={this.handleEmailChange}
            />
          </FormGroup>
        </div>
      </ContainerFlex>
    )
  }
}

export default UserDetails
