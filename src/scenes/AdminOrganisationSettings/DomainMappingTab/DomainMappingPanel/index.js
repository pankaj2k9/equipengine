import React, { Component } from "react"

import ContainerFlex from "base_components/ContainerFlex"
import { FormGroup, Label, Text, Switch } from "base_components/RootForm"

import {
  StatusIcon,
  StatusTitle,
  Status,
  GrayContainer,
  ContainerDisplayLogo,
  DisplayTextLogo,
  Panel
} from "../elements"

export default class DomainMappingPanel extends Component {
  handleChange = event => {
    const { onChange } = this.props
    onChange(event.target.value, event.target.name)
  }

  handleCheckboxChange = event => {
    const { onChange } = this.props
    onChange(event.target.checked, event.target.name)
  }

  render() {
    const { isUseCustomDomain, domain } = this.props

    return (
      <Panel title="Domain Mapping" borderBottom="0" paddingBottom="0">
        <ContainerDisplayLogo alignItems="center">
          <DisplayTextLogo>Use a custom domain</DisplayTextLogo>
          <Switch
            value={isUseCustomDomain}
            onChange={this.handleCheckboxChange}
            name="isUseCustomDomain"
          />
        </ContainerDisplayLogo>
        <GrayContainer>
          <FormGroup>
            <Label>Domain Name</Label>
            <Text
              value={domain}
              onChange={this.handleChange}
              placeholder="crossenv.com.ua"
              name="domain"
            />
          </FormGroup>
        </GrayContainer>
        <GrayContainer>
          <ContainerFlex isAlignCenter>
            <StatusTitle>Status:</StatusTitle>
            <StatusIcon isConnected />
            <Status>Connected</Status>
          </ContainerFlex>
        </GrayContainer>
      </Panel>
    )
  }
}
