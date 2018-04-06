import React from 'react'
// components
import { FormGroup, Label, Text, TextArea } from 'base_components/RootForm'
import FormGroupLeft from '../FormGroupLeft'
import PanelAdminUser from '../PanelAdminUser'
import ContainerFlex from 'base_components/ContainerFlex'
import InputAddress from 'base_components/InputAddress'

const PanelOtherInfo = () => (
  <PanelAdminUser>
    <ContainerFlex>
      <FormGroupLeft>
        <Label>Phone Number</Label>
        <Text name='phoneNumber' placeholder='+61908434' />
      </FormGroupLeft>
      <FormGroup>
        <Label>Date of Birth</Label>
        <Text name='dateOfBirth' placeholder='December 05, 1995' />
      </FormGroup>
    </ContainerFlex>
    <FormGroup>
      <Label>Address</Label>
      <TextArea name='address' row={4} placeholder='Address' />
    </FormGroup>
    <InputAddress />
  </PanelAdminUser>
)

export default PanelOtherInfo
