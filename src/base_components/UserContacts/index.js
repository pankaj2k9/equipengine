import React, { Component } from 'react'
import styled from 'styled-components'
import ContainerFlex from 'base_components/ContainerFlex'
import { FormGroup, Label, Text, TextArea } from 'base_components/RootForm'
import InputAddress from 'base_components/InputAddress'

const Spacing = styled.span`
  margin-right: 0.7em;
`

class UserContacts extends Component {
  handlePhoneChange = ({ target: { value } }) =>
    this.props.onPhoneChange(value)
  handleBirthDateChange = ({ target: { value } }) =>
    this.props.onBirthDateChange(value)
  handleAddressChange = ({ target: { value } }) =>
    this.props.onAddressChange(value)

  render () {
    const { phone, birthDate, address } = this.props
    return (
      <React.Fragment>
        <ContainerFlex>
          <FormGroup>
            <Label>Phone Number</Label>
            <Text
              placeholder='+61908434'
              value={phone}
              onChange={this.handlePhoneChange}
            />
          </FormGroup>
          <Spacing />
          <FormGroup>
            <Label>Date of Birth</Label>
            <Text
              placeholder='December 05, 1995'
              value={birthDate}
              onChange={this.handleBirthDateChange}
            />
          </FormGroup>
        </ContainerFlex>
        <FormGroup>
          <Label>Address</Label>
          <TextArea
            row={4}
            placeholder='Address'
            value={address}
            onChange={this.handleAddressChange}
          />
        </FormGroup>
        <InputAddress />
      </React.Fragment>
    )
  }
}

export default UserContacts
