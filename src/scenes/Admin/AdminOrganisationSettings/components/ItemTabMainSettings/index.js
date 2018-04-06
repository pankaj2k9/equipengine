import React from 'react'
import css from 'utils/css'
// components
import PanelSettings from '../PanelSettings'
import FormSettings from '../FormSettings'
import { FormGroup, Label, Text, TextArea, Switch } from 'base_components/RootForm'
import ButtonUpload from 'base_components/ButtonUpload'
import ContainerFlex from 'base_components/ContainerFlex'
import ButtonSettings from '../ButtonSettings'
import InputAddress from 'base_components/InputAddress'

/**
 * -------------------------------------
 * ItemTabMainSettings
 * @see PanelGeneralInformation
 * @see PanelContactDetails
 * -------------------------------------
 */
const ItemTabMainSettings = () => (
  <FormSettings>
    <PanelGeneralInformation />
    <PanelContactDetails />
    <ButtonSettings>Update</ButtonSettings>
  </FormSettings>
)

export default ItemTabMainSettings

/**
 * -------------------------------------
 * PanelGeneralInformation
 * @see ItemTabMainSettings
 * -------------------------------------
 */
const PanelGeneralInformation = () => (
  <PanelSettings title='General Information' paddingBottom='1.6em'>
    <FormGroup>
      <Label>Organisation Name</Label>
      <Text name='crossView' placeholder='CrossView' />
    </FormGroup>
    <FormGroup>
      <Label>Display Name</Label>
      <Text name='name' />
    </FormGroup>
    <FormGroup>
      <Label>Description of Organisation</Label>
      <TextArea name='description' row='4' placeholder='Communication and culture is focused on those who want to serve in their local community.' />
    </FormGroup>
    <FormGroup>
      <Label>Logo</Label>
      <ContainerFlex alignItems='center'>
        <ButtonUpload />
        <HintTextLogo>Recommended size: 160 x 55 px</HintTextLogo>
      </ContainerFlex>
      <ContainerDisplayLogo alignItems='center'>
        <DisplayTextLogo>Display logo instead of display name</DisplayTextLogo>
        <Switch name='logo' />
      </ContainerDisplayLogo>
    </FormGroup>
  </PanelSettings>
)

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
`('span')

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
`('span')

/**
 * -------------------------------------
 * PanelContactDetails
 * @see ItemTabMainSettings
 * -------------------------------------
 */
const PanelContactDetails = () => (
  <PanelSettings title='Contact Details' borderBottom='0' paddingBottom='0'>
    <FormGroup>
      <Label>Address</Label>
      <Text name='address' placeholder='Connect: Level 1' />
    </FormGroup>
    <InputAddress />
    <FormGroup>
      <Label>Website</Label>
      <Text name='website' placeholder='crossview.com.au' />
    </FormGroup>
    <FormGroup>
      <Label>Email</Label>
      <Text name='email' placeholder='crossview.com.au' />
    </FormGroup>
    <FormGroup>
      <Label>Telephone</Label>
      <Text name='telePhone' placeholder='000000' />
    </FormGroup>
  </PanelSettings>
)
