import React from "react"

import Dropdown from "base_components/RootDropdown"
import { Text } from "base_components/RootForm"
import ContainerFlex from "base_components/ContainerFlex"
import { FormGroupDropdown, FormGroupZipCode } from "./styles"

const InputAddress = ({
  countries = [],
  country,
  states = [],
  state,
  zipCode,
  changeCountry,
  changeState,
  changeZipCode
}) => (
  <ContainerFlex>
    <FormGroupDropdown>
      <Dropdown
        placeholder="Country"
        name="country"
        value={country}
        onChange={changeCountry}
        options={countries.map(country => {
          return {
            key: country.id,
            label: country.name,
            value: country.id
          }
        })}
      />
    </FormGroupDropdown>
    <FormGroupDropdown>
      <Dropdown
        placeholder="State"
        name="state"
        value={state}
        onChange={changeState}
        options={states.map(state => {
          return { key: state.id, label: state.name, value: state.id }
        })}
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
)

export default InputAddress
