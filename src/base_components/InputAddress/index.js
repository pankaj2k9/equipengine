import React from "react"

import Dropdown from "base_components/RootDropdown"
import { Text } from "base_components/RootForm"
import ContainerFlex from "base_components/ContainerFlex"
import { FormGroupDropdown, FormGroupZipCode } from "./styles"

const InputAddress = ({
  country,
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
        value={state}
        onChange={changeState}
        options={[
          { label: "Australlia", value: "au" },
          { label: "Philippines", value: "ph" }
        ]}
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
