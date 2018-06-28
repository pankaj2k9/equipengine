import React, { Component } from 'react'
import Button from 'base_components/RootButton'
import ButtonUpdate from 'base_components/ButtonUpdate'
import ContainerFlex from 'base_components/ContainerFlex'
import Divider from 'base_components/Divider'
import { Label, Switch } from 'base_components/RootForm'
import UserContacts from 'base_components/UserContacts'
import UserDetails from 'base_components/UserDetails'

import NotificationFrequency from './NotificationFrequency'

// extending for button set password
const ButtonSetPassword = Button.extend`
  width: inherit;
  padding: 10px;
  margin-top: 2em;
  margin-left: 9.6em;
`

class Profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: props.profile.firstName,
      lastName: props.profile.lastName,
      email: props.profile.email,
      phone: props.profile.phone,
      birthDate: props.profile.birthDate,
      address: props.profile.address,
      privateMessenger: props.profile.privateMessenger,
      notificationFrequency: props.profile.notificationFrequency
    }
  }

  handleFirstNameChange = (firstName) => this.setState({ firstName })
  handleLastNameChange = (lastName) => this.setState({ lastName })
  handleEmailChange = (email) => this.setState({ email })
  handlePhoneChange = (phone) => this.setState({ phone })
  handleBirthDateChange = (birthDate) => this.setState({ birthDate })
  handleAddressChange = (address) => this.setState({ address })
  handlePrivateMessengerToggle = () =>
    this.setState({ privateMessenger: !this.state.privateMessenger })
  handleNotificationFrequencyChange = (notificationFrequency) =>
    this.setState({ notificationFrequency })

  handleSubmit = () => this.props.onSubmit(this.state)
  handleResetPassword = () => this.props.onResetPassword();

  render () {
    const {
      address,
      birthDate,
      email,
      firstName,
      lastName,
      notificationFrequency,
      phone,
      privateMessenger
    } = this.state
    return (
      <div>
        <h4>General Details</h4>

        {/* Simple user info */}
        <UserDetails
          email={email}
          firstName={firstName}
          lastName={lastName}
          onFirstNameChange={this.handleFirstNameChange}
          onLastNameChange={this.handleLastNameChange}
          onEmailChange={this.handleEmailChange}
        />

        {/* Reset password button */}
        <ButtonSetPassword
          light
          lightBorder
          onClick={this.handleResetPassword}
        >
          Reset password
        </ButtonSetPassword>
        <Divider />

        {/* Additional user info */}
        <UserContacts
          phone={phone}
          birthDate={birthDate}
          address={address}
          onPhoneChange={this.handlePhoneChange}
          onBirthDateChange={this.handleBirthDateChange}
          onAddressChange={this.handleAddressChange}
        />
        <Divider />

        {/* Private messenger switch */}
        <ContainerFlex isSpaceBetween>
          <Label>Private Messenger</Label>
          <Switch
            value={privateMessenger}
            onChange={this.handlePrivateMessengerToggle}
          />
        </ContainerFlex>
        <Divider />
        <h4>Notifications</h4>

        {/* Notificaton frequency config */}
        <NotificationFrequency
          notificationFrequency={notificationFrequency}
          onChange={this.handleNotificationFrequencyChange}
        />

        {/* Submit button */}
        <ButtonUpdate onClick={this.handleSubmit}>Update</ButtonUpdate>
      </div>
    )
  }
}

export default Profile
