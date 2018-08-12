import React, { Fragment } from "react"

import ContainerFlex from "base_components/ContainerFlex"
import DatePicker from "base_components/DatePicker"
import { Desktop, Mobile } from "base_components/Responsive"
import { FormGroup, Label, Text } from "base_components/RootForm"
import ItemFlex from "base_components/ItemFlex"

import { Spacing } from "./elements"

const Phone = ({ value, onChange }) => (
  <FormGroup>
    <Label>Phone Number</Label>
    <Text placeholder="+61908434" value={value} onChange={onChange} />
  </FormGroup>
)

const BirthDate = ({ value, onChange }) => (
  <FormGroup>
    <Label>Date of Birth</Label>
    <DatePicker placeholder="09/15/1994" value={value} onChange={onChange} />
  </FormGroup>
)

const UserContacts = ({ phone, birthDate, changePhone, changeBirthDate }) => (
  <Fragment>
    <Desktop>
      <ContainerFlex>
        <ItemFlex>
          <Phone value={phone} onChange={changePhone} />
        </ItemFlex>
        <Spacing />
        <ItemFlex>
          <BirthDate value={birthDate} onChange={changeBirthDate} />
        </ItemFlex>
      </ContainerFlex>
      <Spacing />
    </Desktop>
    <Mobile>
      <Phone value={phone} onChange={changePhone} />
      <BirthDate value={birthDate} onChange={changeBirthDate} />
    </Mobile>
  </Fragment>
)

export default UserContacts
