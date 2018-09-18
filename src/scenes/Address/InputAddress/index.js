import React, { Component, Fragment } from "react"

import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import Dropdown from "base_components/RootDropdown"
import ContainerFlex from "base_components/ContainerFlex"
import { FormGroupDropdown, FormGroupZipCode } from "./styles"
import { FormGroup, Label, Text } from "base_components/RootForm"

import features from "features"

import Loading from "base_components/Loading"

class InputAddress extends Component {
  componentDidMount() {
    const { countries, states, fetchCountries, fetchStates } = this.props

    if (countries.length === 0) {
      fetchCountries()
    }

    if (states.length === 0) {
      fetchStates()
    }
  }

  render() {
    const {
      address,
      countries,
      states,
      isFetchingAddress,
      country,
      state,
      zipCode,
      changeAddress,
      changeCountry,
      changeState,
      changeZipCode
    } = this.props

    return isFetchingAddress ? (
      <Loading />
    ) : (
      <Fragment>
        <FormGroup>
          <Label>Address</Label>
          <Text
            placeholder="Address"
            value={address}
            onChange={changeAddress}
            name="address"
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
              placeholder="Zip code"
              name="zipCode"
            />
          </FormGroupZipCode>
        </ContainerFlex>
      </Fragment>
    )
  }
}

const mapState = () =>
  createStructuredSelector({
    countries: features.address.selectors.selectCountries(),
    states: features.address.selectors.selectStates(),
    isFetchingAddress: features.address.selectors.selectIsFetchingAddress()
  })

const mapDispatch = dispatch =>
  bindActionCreators(
    {
      fetchCountries: features.address.actions.fetchCountries,
      fetchStates: features.address.actions.fetchStates
    },
    dispatch
  )

export default connect(
  mapState,
  mapDispatch
)(InputAddress)
