import React, { Component } from "react"
import joi from "joi"
import { toastr } from "react-redux-toastr"

import ContainerBodyAdmin from "scenes/Admin/components/ContainerAdminPanel/components/ContainerBodyAdmin"

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

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthDate: "",
    address: "",
    country: "",
    state: "",
    zipCode: "",
    role: "",
    // TODO: users management here
    // usersCanSee: [],
    hasFileControlPrivelegies: false,
    isSuspended: false
  }

  onChange = (e, selector) => {
    const fields = this.state

    const nextFields = updateFieldValue(e, selector, fields)

    this.setState(nextFields)
  }

  onSubmit = e => {
    e.preventDefault()

    const fields = this.state

    const validationResult = validate(fields, validationSchema)

    if (!validationResult.error) {
      return toastr.success("User information", "Data updated successfully")
    }

    toastr.error(
      "Validation error",
      validationResult.error.details[0].context.label
    )
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
      isSuspended
    } = this.state

    return (
      <ContainerBodyAdmin>
        <MainForm>
          <ResponsivePanel title="User Details">
            <UserDetails
              firstName={firstName}
              lastName={lastName}
              email={email}
              changeFirstName={e => this.onChange(e.target.value, "firstName")}
              changeLastName={e => this.onChange(e.target.value, "lastName")}
              changeEmail={e => this.onChange(e.target.value, "email")}
            />
          </ResponsivePanel>
          <ResponsivePanel>
            <UserContacts
              phone={phone}
              birthDate={birthDate}
              address={address}
              changePhone={e => this.onChange(e.target.value, "phone")}
              changeBirthDate={value => this.onChange(value, "birthDate")}
              changeAddress={e => this.onChange(e.target.value, "address")}
            />
            <InputAddress
              country={country}
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
          </ResponsivePanel>
          <PanelGroups />
          <PanelAccountRole
            role={role}
            hasFileControlPrivelegies={hasFileControlPrivelegies}
            // users
            onChange={this.onChange}
          />
          <PanelControlGroup
          // isSuspended
          />
          <ButtonUpdate onClick={this.onSubmit}>Update</ButtonUpdate>
        </MainForm>
      </ContainerBodyAdmin>
    )
  }
}

export default Form
