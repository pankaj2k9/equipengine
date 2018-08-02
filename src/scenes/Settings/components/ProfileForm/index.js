import React, { Component } from "react"
import ButtonUpdate from "base_components/ButtonUpdate"
import ContainerFlex from "base_components/ContainerFlex"
import Divider from "base_components/Divider"
import { Label, Switch } from "base_components/RootForm"
import UserContacts from "base_components/UserContacts"
import UserDetails from "base_components/UserDetails"
import InputAddress from "base_components/InputAddress"

import NotificationFrequency from "./NotificationFrequency"

import { updateFieldValue, getDropdownValue } from "utils/formFunctions"

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: props.profile.firstName,
      lastName: props.profile.lastName,
      email: props.profile.email,
      phone: props.profile.phone,
      birthDate: props.profile.birthDate,
      address: props.profile.address,
      privateMessenger: props.profile.privateMessenger,
      notificationFrequency: props.profile.notificationFrequency,
      state: props.profile.state,
      zipCode: props.profile.zipCode
    }
  }

  onChange = (event, selector) => {
    const fields = { ...this.state }
    const nextFields = updateFieldValue(event, selector, fields)

    this.setState(nextFields)
  }

  handleFirstNameChange = event =>
    this.setState({ firstName: event.target.value })

  handleLastNameChange = event =>
    this.setState({ lastName: event.target.value })

  handleEmailChange = event => this.setState({ email: event.target.value })

  handlePhoneChange = event => this.setState({ phone: event.target.value })

  handleBirthDateChange = data => this.setState({ birthDate: data })

  handleAddressChange = event => this.setState({ address: event.target.value })

  handlePrivateMessengerToggle = () =>
    this.setState({ privateMessenger: !this.state.privateMessenger })
  handleNotificationFrequencyChange = notificationFrequency =>
    this.setState({ notificationFrequency })

  handleSubmit = () => this.props.onSubmit(this.state)
  handleResetPassword = () => this.props.onResetPassword()

  render() {
    const {
      address,
      birthDate,
      country,
      email,
      firstName,
      lastName,
      notificationFrequency,
      phone,
      privateMessenger,
      state,
      zipCode
    } = this.state
    return (
      <div>
        <h4>General Details</h4>

        {/* Simple user info */}
        <UserDetails
          email={email}
          firstName={firstName}
          lastName={lastName}
          changeFirstName={this.handleFirstNameChange}
          changeLastName={this.handleLastNameChange}
          changeEmail={this.handleEmailChange}
          onResetPasswordClick={this.handleResetPassword}
          resetPasswordExist={true}
          isAvatarEditable={true}
        />

        <Divider />

        {/* Additional user info */}
        <UserContacts
          phone={phone}
          birthDate={birthDate}
          address={address}
          changePhone={this.handlePhoneChange}
          changeBirthDate={this.handleBirthDateChange}
          changeAddress={this.handleAddressChange}
        />

        <InputAddress
          country={country}
          state={state}
          zipCode={zipCode}
          changeCountry={value =>
            this.onChange(getDropdownValue(value), "country")
          }
          changeState={value => this.onChange(getDropdownValue(value), "state")}
          changeZipCode={e => this.onChange(e.target.value, "zipCode")}
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
