import React from "react"
import css from "utils/css"

import { compose, withStateHandlers } from "recompose"

// components
import PanelSettings from "../PanelSettings"
import FormSettings from "../FormSettings"
import {
  FormGroup,
  Label,
  Text,
  TextArea,
  Switch
} from "base_components/RootForm"
import ButtonUpload from "base_components/ButtonUpload"
import ContainerFlex from "base_components/ContainerFlex"
import ButtonSettings from "../ButtonSettings"
import InputAddress from "base_components/InputAddress"

/**
 * -------------------------------------
 * ItemTabMainSettings
 * @see PanelGeneralInformation
 * @see PanelContactDetails
 * -------------------------------------
 */
const ItemTabMainSettings = ({
  organizationName,
  displayName,
  organizationDescription,
  logo,
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
      displayLogoInsteadOfDisplay={displayLogoInsteadOfDisplay}
      updateVal={updateVal}
    />
    <PanelContactDetails
      contactAddress={contactAddress}
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
        const value = e.target ? e.target.value : e

        return {
          ...props,
          [selector]: value
        }
      }
    }
  )
)(ItemTabMainSettings)

const PanelGeneralInformation = ({
  organizationName,
  displayName,
  organizationDescription,
  logo,
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
          <ButtonUpload />
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
/**
 * -------------------------------------
 * HintTextLogo component
 * -------------------------------------
 */
const HintTextLogo = css`
  font-size: 12px;
  color: #666666;
  width: 119px;
  display: inline-block;
  margin-left: 1em;
`("span")

/**
 * -------------------------------------
 * ContainerDisplayLogo component
 * -------------------------------------
 */
const ContainerDisplayLogo = css`
  margin-top: 0.6em;
`(ContainerFlex)

/**
 * -------------------------------------
 * DisplayTextLogo component
 * -------------------------------------
 */
const DisplayTextLogo = css`
  width: 130px;
  margin-right: 2em;
`("span")

/**
 * -------------------------------------
 * PanelContactDetails
 * @see ItemTabMainSettings
 * -------------------------------------
 */
const PanelContactDetails = ({
  contactAddress,
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
    <InputAddress />
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
