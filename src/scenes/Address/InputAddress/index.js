import React, { Fragment } from "react"

import Dropdown from "base_components/RootDropdown"
import ContainerFlex from "base_components/ContainerFlex"
import { FormGroupDropdown, FormGroupZipCode } from "./styles"
import { FormGroup, Label, Text, TextArea } from "base_components/RootForm"

const InputAddress = ({
  address,
  countries = [],
  states = [],
  country,
  state,
  zipCode,
  changeAddress,
  changeCountry,
  changeState,
  changeZipCode
}) => (
  <Fragment>
    <FormGroup>
      <Label>Address</Label>
      <TextArea
        row={4}
        placeholder="Address"
        value={address}
        onChange={changeAddress}
      />
    </FormGroup>
    <ContainerFlex>
      <FormGroupDropdown>
        <Dropdown
          placeholder="Country"
          name="country"
          value={country}
          onChange={changeCountry}
          options={countries.map(country => ({
            label: country.name,
            value: country.id
          }))}
        />
      </FormGroupDropdown>
      <FormGroupDropdown>
        <Dropdown
          placeholder="State"
          name="state"
          value={state}
          onChange={changeState}
          options={states.map(state => ({
            label: state.name,
            value: state.id
          }))}
        />
      </FormGroupDropdown>
      <FormGroupZipCode>
        <Text
          value={zipCode}
          onChange={changeZipCode}
          name="zipCode"
          placeholder="Zip code"
        />
      </FormGroupZipCode>
    </ContainerFlex>
  </Fragment>
)

export default InputAddress
