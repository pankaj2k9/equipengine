import React, { Component } from "react"
import ButtonUpdate from "base_components/ButtonUpdate"
import ContainerFlex from "base_components/ContainerFlex"
import Divider from "base_components/Divider"
import { Label, Switch } from "base_components/RootForm"
import UserContacts from "base_components/UserContacts"
import UserDetails from "base_components/UserDetails"
import moment from "moment"

import features from "features"
import NotificationFrequency from "../NotificationFrequency"
import { updateFieldValue, getDropdownValue } from "utils/formFunctions"

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: props.profile.email,
      firstName: props.profile.first_name,
      lastName: props.profile.last_name,
      phone: props.profile.phone_number,
      birthDate:
        props.profile.date_of_birth && moment(props.profile.date_of_birth),
      address: props.profile.address,
      chatsEnabled: false,
      notificationFrequency: {
        activitySummary: false,
        courseResponse: false,
        emailNotifications: false,
        groupDiscussion: false,
        privateMessage: false
      },
      state: props.profile.state_id,
      country: props.profile.country_id,
      zipCode: props.profile.zip_code
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

  handleBirthDateChange = date => this.setState({ birthDate: date })

  handleAddressChange = event => this.setState({ address: event.target.value })

  handlePrivateMessengerToggle = () =>
    this.setState({ privateMessenger: !this.state.privateMessenger })
  handleNotificationFrequencyChange = notificationFrequency =>
    this.setState({ notificationFrequency })

  handleSubmit = () =>
    this.props.onSubmit({ ...this.state, id: this.props.profile.id })
  handleResetPassword = () => this.props.onResetPassword()

  handleStateChange = ({ target: { value } }) => {}

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
          changePhone={this.handlePhoneChange}
          changeBirthDate={this.handleBirthDateChange}
        />

        <features.address.pages.AddressInfo
          address={address}
          country={country}
          state={state}
          zipCode={zipCode}
          changeAddress={this.handleAddressChange}
          changeCountry={value => {
            this.onChange(getDropdownValue(value), "country")
          }}
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
