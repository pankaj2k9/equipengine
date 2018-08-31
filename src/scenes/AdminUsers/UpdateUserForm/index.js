import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import joi from "joi"
import { toastr } from "react-redux-toastr"
import moment from "moment"

import InputAddress from "base_components/InputAddress"
import ButtonUpdate from "base_components/ButtonUpdate"
import UserDetails from "base_components/UserDetails"
import UserContacts from "base_components/UserContacts"

import PanelAccountRole from "./PanelAccountRole"
import PanelControlGroup from "./PanelControlGroup"
import PanelGroups from "./PanelGroups"

import { MainForm, ResponsivePanel } from "./elements"
import {
  updateFieldValue,
  validate,
  getDropdownValue
} from "utils/formFunctions"

import { types } from "../ducks"
import features from "features"

const validationSchema = joi.object().keys({
  firstName: joi
    .string()
    .required()
    .label("First name is required"),
  lastName: joi
    .string()
    .required()
    .label("Last name is required"),
  email: joi
    .string()
    .email()
    .required()
    .label("Email name is required")
})

class UpdateUserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.user && props.user.id,
      firstName: props.user && props.user.first_name,
      lastName: props.user && props.user.last_name,
      email: props.user && props.user.email,
      phone: props.user && props.user.phone_number,
      birthDate: props.user && props.user.date_of_birth,
      address: props.user && props.user.address,
      country: props.user && props.user.country_id,
      state: props.user && props.user.state_id,
      zipCode: props.user && props.user.zip_code,
      organization_settings: props.user && props.user.organization_settings,
      role:
        props.user &&
        props.user.organization_settings &&
        props.user.organization_settings.role,
      hasFileControlPrivelegies:
        props.user &&
        props.user.organization_settings &&
        props.user.organization_settings.files_controll_enabled,
      messengerAccess:
        props.user &&
        props.user.organization_settings &&
        props.user.organization_settings.messanger_access_enabled
    }
  }

  componentDidMount() {
    const { countries, states } = this.props

    !countries.length && this.props.fetchCountries()
    !states.length && this.props.fetchStates()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.user.id !== prevState.id) {
      return { ...nextProps.user } // <- this is setState equivalent
    }
  }

  onChange = (e, selector) => {
    const fields = this.state

    const nextFields = updateFieldValue(e, selector, fields)

    // TODO: make this more generic.
    if (selector === "role") {
      nextFields.roles = e
      nextFields.organization_settings = nextFields.organization_settings.merge(
        { role: e }
      )
    } else if (selector === "hasFileControlPrivelegies") {
      nextFields.organization_settings = nextFields.organization_settings.merge(
        { files_controll_enabled: e }
      )
    } else if (selector === "messengerAccess") {
      nextFields.organization_settings = nextFields.organization_settings.merge(
        { messanger_access_enabled: e }
      )
    }

    this.setState(nextFields)
  }

  handleUpdateUser = e => {
    e.preventDefault()

    const validationResult = validate(this.state, validationSchema)

    if (!validationResult.error) {
      this.props.updateUser(this.state.id, this.state).then(action => {
        if (action.type === types.UPDATE_USER_SUCCESS) {
          this.handleTabClick(action.payload.user)
          toastr.success(
            "Success",
            `User "${this.state.email}" is succesffully updated`
          )
        } else {
          toastr.error("Error", `Failed to update user "${this.state.email}"`)
        }
      })

      return
    }

    toastr.error(
      "Validation error",
      validationResult.error.details[0].context.label
    )
  }

  handleSendResetPasswordToken = () => {
    const { user } = this.props
    if (user) {
      this.props.onSendResetPasswordToken(user)
    }
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      birthDate,
      address,
      country,
      state,
      zipCode,
      role,
      hasFileControlPrivelegies,
      messengerAccess,
      participatedGroupIds
    } = this.state
    const { onSubmit, countries, states } = this.props

    return (
      <MainForm>
        <ResponsivePanel title="User Details">
          <UserDetails
            firstName={firstName}
            lastName={lastName}
            email={email}
            changeFirstName={e => this.onChange(e.target.value, "firstName")}
            changeLastName={e => this.onChange(e.target.value, "lastName")}
            changeEmail={e => this.onChange(e.target.value, "email")}
            onSendResetPasswordToken={this.handleSendResetPasswordToken}
            isAvatarEditable
          />
        </ResponsivePanel>
        <ResponsivePanel>
          <UserContacts
            phone={phone}
            birthDate={birthDate ? moment(birthDate) : birthDate}
            address={address}
            changePhone={e => this.onChange(e.target.value, "phone")}
            changeBirthDate={value => this.onChange(value, "birthDate")}
            changeAddress={e => this.onChange(e.target.value, "address")}
          />
          {countries.length !== 0 &&
            states.length !== 0 && (
              <InputAddress
                countries={countries}
                country={country}
                states={states}
                state={state}
                zipCode={zipCode}
                changeCountry={value =>
                  this.onChange(getDropdownValue(value), "country")
                }
                changeState={value =>
                  this.onChange(getDropdownValue(value), "state")
                }
                changeZipCode={e => this.onChange(e.target.value, "zipCode")}
              />
            )}
        </ResponsivePanel>
        <PanelGroups
          groups={this.props.groups}
          selectedGroupIds={participatedGroupIds}
          onChange={this.onChange}
        />
        <PanelAccountRole
          role={role}
          hasFileControlPrivelegies={hasFileControlPrivelegies}
          messengerAccess={messengerAccess}
          // users
          onChange={this.onChange}
        />
        <PanelControlGroup />
        <ButtonUpdate onClick={e => onSubmit(e, this.state)}>
          Update
        </ButtonUpdate>
        {/* <ButtonUpdate onClick={this.handleUpdateUser}>Update</ButtonUpdate> */}
      </MainForm>
    )
  }
}

// export default UpdateUserForm

const mapState = state => {
  // createStructuredSelector({
  //   countries: features.address.selectors.selectCountries(),
  //   states: features.address.selectors.selectStates()
  // })
  return {
    countries: state.address.countries,
    states: state.address.states
  }
}

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      updateUser: features.adminUsers.actions.updateUser,
      fetchCountries: features.address.actions.fetchCountries,
      fetchStates: features.address.actions.fetchStates
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(UpdateUserForm)

export { validationSchema }
