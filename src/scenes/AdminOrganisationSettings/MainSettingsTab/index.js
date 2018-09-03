import React, { Component, createRef } from "react"
import { toastr } from "react-redux-toastr"
import { compose, pure } from "recompose"
import joi from "joi"

import { types } from "../ducks"

import ContactDetailsPanel from "./ContactDetailsPanel"
import GeneralInformationPanel from "./GeneralInformationPanel"

import { ButtonSettings, FormSettings } from "./elements"

import { updateFieldValue, validate } from "utils/formFunctions"

const validationSchema = joi.object().keys({
  title: joi
    .string()
    .required()
    .label("organization name is required"),
  display_name: joi
    .string()
    .required()
    .label("display name is required"),
  address: joi
    .string()
    .required()
    .label("contact address is required"),
  website: joi
    .string()
    .required()
    .label("website is required"),
  email: joi
    .string()
    .required()
    .label("email is required")
})

class ItemTabMainSettings extends Component {
  state = {
    fields: {
      title: this.props.organization.title,
      display_name: this.props.organization.display_settings.display_name,
      description: this.props.organization.description,
      logo: this.props.organization.logo.url,
      address: this.props.organization.address,
      country_id: this.props.organization.country_id,
      state_id: this.props.organization.state_id,
      zip_code: this.props.organization.zip_code,
      website: this.props.organization.website,
      email: this.props.organization.email,
      phone: this.props.organization.phone
    }
  }

  logoRef = createRef()

  onChange = (event, selector) => {
    const { fields } = this.state

    const nextFields = updateFieldValue(event, selector, fields)

    this.setState({ fields: nextFields })
  }

  onSubmit = () => {
    const { fields } = this.state

    const validationResult = validate(fields, validationSchema)

    if (validationResult.error) {
      toastr.error(
        "Validation error",
        validationResult.error.details[0].context.label
      )
    } else {
      const {
        organization: { id },
        changeOrganization
      } = this.props

      changeOrganization({ id, organization: fields }).then(action => {
        if (action.type === types.CHANGE_ORGANIZATION_SUCCESS) {
          toastr.success("Main settings", "Data is updated successfully")
        } else {
          toastr.error("Main settings", "Error while updating")
        }
      })
    }
  }

  render() {
    const {
      title,
      display_name,
      description,
      logo,
      displayLogoInsteadOfDisplay,
      address,
      country_id,
      state_id,
      zip_code,
      website,
      email,
      phone
    } = this.state.fields

    return (
      <FormSettings>
        <GeneralInformationPanel
          title={title}
          displayName={display_name}
          description={description}
          logo={logo}
          logoRef={this.logoRef}
          displayLogoInsteadOfDisplay={displayLogoInsteadOfDisplay}
          onChange={this.onChange}
        />
        <ContactDetailsPanel
          address={address}
          countryId={country_id}
          stateId={state_id}
          zipCode={zip_code}
          website={website}
          email={email}
          phone={phone}
          onChange={this.onChange}
        />
        <ButtonSettings onClick={this.onSubmit}>Update</ButtonSettings>
      </FormSettings>
    )
  }
}

export default compose(pure)(ItemTabMainSettings)
