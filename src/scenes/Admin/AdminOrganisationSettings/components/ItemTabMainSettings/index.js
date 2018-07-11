import React from "react"
import { compose, withStateHandlers } from "recompose"

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
  updateVal
}) => {
  return (
    <PanelSettings title="General Information" paddingBottom="1.6em">
      <FormGroup>
        <Label>Organisation Name &#42;</Label>
        <Text
          onChange={e => updateVal(e, "organizationName")}
          value={organizationName}
          name="crossView"
          placeholder="CrossView"
        />
      </FormGroup>
      <FormGroup>
        <Label>Display Name &#42;</Label>
        <Text
          onChange={e => updateVal(e, "displayName")}
          value={displayName}
          name="name"
        />
      </FormGroup>
      <FormGroup>
        <Label>Description of Organisation</Label>
        <TextArea
          onChange={e => updateVal(e, "organizationDescription")}
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
            ref={el => updateVal(el, "logoRef")}
          />
          <HintTextLogo>Recommended size: 160 x 55 px</HintTextLogo>
        </ContainerFlex>
        <ContainerDisplayLogo alignItems="center">
          <DisplayTextLogo>
            Display logo instead of display name
          </DisplayTextLogo>
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
}

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
        onChange={e => updateVal(e, "contactAddress")}
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
          onChange={e => updateVal(e, "contactAddressZipCode")}
          name="zipCode"
          placeholder="Zip code"
        />
      </FormGroupZipCode>
    </ContainerFlex>
    <FormGroup>
      <Label>Website &#42;</Label>
      <Text
        value={website}
        onChange={e => updateVal(e, "website")}
        name="website"
        placeholder="crossview.com.au"
      />
    </FormGroup>
    <FormGroup>
      <Label>Email &#42;</Label>
      <Text
        value={email}
        onChange={e => updateVal(e, "email")}
        name="email"
        placeholder="crossview.com.au"
      />
    </FormGroup>
    <FormGroup>
      <Label>Telephone</Label>
      <Text
        value={telephone}
        onChange={e => updateVal(e, "telephone")}
        name="telePhone"
        placeholder="000000"
      />
    </FormGroup>
  </PanelSettings>
)

const ItemTabMainSettings = ({
  organizationName,
  displayName,
  organizationDescription,
  logo,
  logoRef,
  displayLogoInsteadOfDisplay,
  contactAddress,

  // TODO: use these fields
  contactAddressCountry,
  contactAddressState,
  contactAddressZipCode,

  website,
  email,
  telephone,
  updateVal
}) => (
  <FormSettings>
    <PanelGeneralInformation
      organizationName={organizationName}
      displayName={displayName}
      organizationDescription={organizationDescription}
      logo={logo}
      logoRef={logoRef}
      displayLogoInsteadOfDisplay={displayLogoInsteadOfDisplay}
      updateVal={updateVal}
    />
    <PanelContactDetails
      contactAddress={contactAddress}
      contactAddressCountry={contactAddressCountry}
      contactAddressState={contactAddressState}
      contactAddressZipCode={contactAddressZipCode}
      website={website}
      email={email}
      telephone={telephone}
      updateVal={updateVal}
    />
    <ButtonSettings>Update</ButtonSettings>
  </FormSettings>
)

export default compose(
  withStateHandlers(
    {
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
    },
    {
      updateVal: props => (e, selector) => {
        if (e === null || e === undefined) return { ...props }

        if (e.preventDefault) e.preventDefault()

        if (!e.target)
          return {
            ...props,
            [selector]: e
          }

        return {
          ...props,
          [selector]: e.target.value
        }
      }
    }
  )
)(ItemTabMainSettings)
