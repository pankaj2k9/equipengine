import React, { Component } from "react"
import features from "features"

import { FormGroup, Label, Text } from "base_components/RootForm"
import { PanelSettings } from "../elements"

import { getDropdownValue } from "utils/formFunctions"

class ContactDetailsPanel extends Component {
  handleChange = event => {
    const { onChange } = this.props
    onChange(event.target.value, event.target.name)
  }

  render() {
    const {
      address,
      countryId,
      stateId,
      zipCode,
      website,
      email,
      phone,
      onChange
    } = this.props

    return (
      <PanelSettings title="Contact Details" borderBottom="0" paddingBottom="0">
        <features.address.pages.AddressInfo
          address={address}
          country={countryId}
          state={stateId}
          zipCode={zipCode}
          changeAddress={this.handleChange}
          changeCountry={value =>
            onChange(getDropdownValue(value), "country_id")
          }
          changeState={value => onChange(getDropdownValue(value), "state_id")}
          changeZipCode={this.handleChange}
        />
        <FormGroup>
          <Label>Website &#42;</Label>
          <Text
            value={website}
            onChange={this.handleChange}
            name="website"
            placeholder="crossview.com.au"
          />
        </FormGroup>
        <FormGroup>
          <Label>Email &#42;</Label>
          <Text
            value={email}
            onChange={this.handleChange}
            name="email"
            placeholder="crossview.com.au"
          />
        </FormGroup>
        <FormGroup>
          <Label>Telephone</Label>
          <Text
            value={phone}
            onChange={this.handleChange}
            name="phone"
            placeholder="000000"
          />
        </FormGroup>
      </PanelSettings>
    )
  }
}

export default ContactDetailsPanel
