import React from "react"
// components
import Dropdown from "base_components/RootDropdown"
import { Text } from "base_components/RootForm"
import ContainerFlex from "base_components/ContainerFlex"
import { FormGroupDropdown, FormGroupZipCode } from "./styles"

const InputAddress = () => (
  <ContainerFlex>
    <FormGroupDropdown>
      <Dropdown
        placeholder="Country"
        name="country"
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
        options={[
          { label: "Australlia", value: "au" },
          { label: "Philippines", value: "ph" }
        ]}
      />
    </FormGroupDropdown>
    <FormGroupZipCode>
      <Text name="zipCode" placeholder="Zip code" />
    </FormGroupZipCode>
  </ContainerFlex>
)

export default InputAddress
