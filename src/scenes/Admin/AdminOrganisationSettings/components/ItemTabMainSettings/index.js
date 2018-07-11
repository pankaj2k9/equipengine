import React, { Component } from "react"
import joi from "joi"
import { toastr } from "react-redux-toastr"

import {
  FormGroup,
  Label,
  Text,
  TextArea,
  Switch
} from "base_components/RootForm"
import ButtonUpload from "base_components/ButtonUpload"
import ContainerFlex from "base_components/ContainerFlex"
import FileChooser from "base_components/FileChooser"
import Dropdown from "base_components/RootDropdown"

import PanelSettings from "../PanelSettings"
import FormSettings from "../FormSettings"
import ButtonSettings from "../ButtonSettings"

import {
  HintTextLogo,
  ContainerDisplayLogo,
  DisplayTextLogo,
  FormGroupDropdown,
  FormGroupZipCode
} from "./elements"

const openFileChooser = (e, ref) => {
  e.preventDefault()
  if (ref) ref.open()
}

const getDropdownValue = selectedOption => {
  if (!selectedOption) return null
  return selectedOption.value
}

const PanelGeneralInformation = ({
  organizationName,
  displayName,
  organizationDescription,
  logo,
  logoRef,
  displayLogoInsteadOfDisplay,
  updateVal,
  updateRef
}) => (
  <PanelSettings title="General Information" paddingBottom="1.6em">
    <FormGroup>
      <Label>Organisation Name &#42;</Label>
      <Text
        onChange={e => updateVal(e.target.value, "organizationName")}
        value={organizationName}
        name="crossView"
        placeholder="CrossView"
      />
    </FormGroup>
    <FormGroup>
      <Label>Display Name &#42;</Label>
      <Text
        onChange={e => updateVal(e.target.value, "displayName")}
        value={displayName}
        name="name"
      />
    </FormGroup>
    <FormGroup>
      <Label>Description of Organisation</Label>
      <TextArea
        onChange={e => updateVal(e.target.value, "organizationDescription")}
        value={organizationDescription}
        name="description"
        row="4"
        placeholder="Communication and culture is focused on those who want to serve in their local community."
      />
    </FormGroup>
    <FormGroup>
      <Label>Logo</Label>
      <ContainerFlex alignItems="center">
        <ButtonUpload
          onClick={e => openFileChooser(e, logoRef)}
          isFileAttached={logo}
        />
        <FileChooser
          onChooseFiles={files => updateVal(files[0], "logo")}
          ref={el => updateRef(el, "logoRef")}
        />
        <HintTextLogo>Recommended size: 160 x 55 px</HintTextLogo>
      </ContainerFlex>
      <ContainerDisplayLogo alignItems="center">
        <DisplayTextLogo>Display logo instead of display name</DisplayTextLogo>
        <Switch
          value={displayLogoInsteadOfDisplay}
          onChange={e =>
            updateVal(e.target.checked, "displayLogoInsteadOfDisplay")
          }
        />
      </ContainerDisplayLogo>
    </FormGroup>
  </PanelSettings>
)

const PanelContactDetails = ({
  contactAddress,
  contactAddressCountry,
  contactAddressState,
  contactAddressZipCode,
  website,
  email,
  telephone,
  updateVal
}) => (
  <PanelSettings title="Contact Details" borderBottom="0" paddingBottom="0">
    <FormGroup>
      <Label>Address &#42;</Label>
      <Text
        value={contactAddress}
        onChange={e => updateVal(e.target.value, "contactAddress")}
        name="address"
        placeholder="Connect: Level 1"
      />
    </FormGroup>
    <ContainerFlex>
      <FormGroupDropdown>
        <Dropdown
          placeholder="Country"
          name="country"
          onChange={selectedOption =>
            updateVal(getDropdownValue(selectedOption), "contactAddressCountry")
          }
          options={[
            { label: "Australlia", value: "au" },
            { label: "Philippines", value: "ph" }
          ]}
        />
      </FormGroupDropdown>
      <FormGroupDropdown>
        <Dropdown
          placeholder="State"
          name="state"
          onChange={selectedOption =>
            updateVal(getDropdownValue(selectedOption), "contactAddressState")
          }
          options={[
            { label: "Australlia", value: "au" },
            { label: "Philippines", value: "ph" }
          ]}
        />
      </FormGroupDropdown>
      <FormGroupZipCode>
        <Text
          value={contactAddressZipCode}
          onChange={e => updateVal(e.target.value, "contactAddressZipCode")}
          name="zipCode"
          placeholder="Zip code"
        />
      </FormGroupZipCode>
    </ContainerFlex>
    <FormGroup>
      <Label>Website &#42;</Label>
      <Text
        value={website}
        onChange={e => updateVal(e.target.value, "website")}
        name="website"
        placeholder="crossview.com.au"
      />
    </FormGroup>
    <FormGroup>
      <Label>Email &#42;</Label>
      <Text
        value={email}
        onChange={e => updateVal(e.target.value, "email")}
        name="email"
        placeholder="crossview.com.au"
      />
    </FormGroup>
    <FormGroup>
      <Label>Telephone</Label>
      <Text
        value={telephone}
        onChange={e => updateVal(e.target.value, "telephone")}
        name="telePhone"
        placeholder="000000"
      />
    </FormGroup>
  </PanelSettings>
)

const validationSchema = joi.object().keys({
  organizationName: joi
    .string()
    .required()
    .label("organization name is required"),
  displayName: joi
    .string()
    .required()
    .label("display name is required"),
  contactAddress: joi
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

const validate = fields =>
  joi.validate(fields, validationSchema, {
    allowUnknown: true
  })

class ItemTabMainSettings extends Component {
  state = {
    organizationName: "",
    displayName: "",
    organizationDescription: "",
    logo: null,
    logoRef: null,
    displayLogoInsteadOfDisplay: false,
    contactAddress: "",
    contactAddressCountry: "",
    contactAddressState: "",
    contactAddressZipCode: "",
    website: "",
    email: "",
    telephone: ""
  }

  updateVal = (e, selector) => {
    if (e === null || e === undefined) {
      return
    }

    if (e.preventDefault) {
      e.preventDefault()
    }

    if (!e.target) {
      return this.setState(state => ({
        ...state,
        [selector]: e
      }))
    }

    this.setState(state => ({
      ...state,
      [selector]: e.target.value
    }))
  }

  updateRef = (el, selector) => {
    this[selector] = el
  }

  onSubmit = e => {
    e.preventDefault()

    const fields = this.state

    const validationResult = validate(fields)

    if (validationResult.error === null) {
      return toastr.success("Main settings", "Data updated successfully")
    }

    toastr.error(
      "Validation error",
      validationResult.error.details[0].context.label
    )
  }

  render() {
    const {
      organizationName,
      displayName,
      organizationDescription,
      logo,
      displayLogoInsteadOfDisplay,
      contactAddress,
      contactAddressCountry,
      contactAddressState,
      contactAddressZipCode,
      website,
      email,
      telephone
    } = this.state

    return (
      <FormSettings>
        <PanelGeneralInformation
          organizationName={organizationName}
          displayName={displayName}
          organizationDescription={organizationDescription}
          logo={logo}
          logoRef={this.logoRef}
          displayLogoInsteadOfDisplay={displayLogoInsteadOfDisplay}
          updateVal={this.updateVal}
          updateRef={this.updateRef}
        />
        <PanelContactDetails
          contactAddress={contactAddress}
          contactAddressCountry={contactAddressCountry}
          contactAddressState={contactAddressState}
          contactAddressZipCode={contactAddressZipCode}
          website={website}
          email={email}
          telephone={telephone}
          updateVal={this.updateVal}
        />
        <ButtonSettings onClick={this.onSubmit}>Update</ButtonSettings>
      </FormSettings>
    )
  }
}

export default ItemTabMainSettings
