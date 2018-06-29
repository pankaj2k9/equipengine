import React, { Component } from 'react'
import styled from 'styled-components'
import ContainerFlex from 'base_components/ContainerFlex'
import DatePicker from 'base_components/DatePicker'
import { Desktop, Mobile } from 'base_components/Responsive'
import { FormGroup, Label, Text, TextArea } from 'base_components/RootForm'
import InputAddress from 'base_components/InputAddress'

const Spacing = styled.span`
  margin-right: 0.7em;
`

class UserContacts extends Component {
  handlePhoneChange = ({ target: { value } }) =>
    this.props.onPhoneChange(value)
  handleBirthDateChange = (value) =>
    this.props.onBirthDateChange(value)
  handleAddressChange = ({ target: { value } }) =>
    this.props.onAddressChange(value)

  renderPhoneInput = (value) =>
    <FormGroup flex={1}>
      <Label>Phone Number</Label>
      <Text
        placeholder='+61908434'
        value={value}
        onChange={this.handlePhoneChange}
      />
    </FormGroup>

  renderBirthDateInput = (value) =>
    <FormGroup flex={1}>
      <Label>Date of Birth</Label>
      <DatePicker
        placeholder='09/15/1994'
        value={value}
        onChange={this.handleBirthDateChange}
      />
    </FormGroup>

  renderAddressInput = (value) =>
    <FormGroup>
      <Label>Address</Label>
      <TextArea
        row={4}
        placeholder='Address'
        value={value}
        onChange={this.handleAddressChange}
      />
    </FormGroup>

  render () {
    const { phone, birthDate, address } = this.props
    return (
      <React.Fragment>
        <Desktop>
          <ContainerFlex>
            {this.renderPhoneInput(phone)}
            <Spacing />
            {this.renderBirthDateInput(birthDate)}
          </ContainerFlex>
        </Desktop>
        <Mobile>
          {this.renderPhoneInput(phone)}
          {this.renderBirthDateInput(birthDate)}
        </Mobile>
        {this.renderAddressInput(address)}
        <InputAddress />
      </React.Fragment>
    )
  }
}

export default UserContacts
