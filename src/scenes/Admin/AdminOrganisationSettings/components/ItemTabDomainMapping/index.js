import React, { Component } from "react"
import { toastr } from "react-redux-toastr"
import joi from "joi"

import { FormGroup, Label, Text, Switch } from "base_components/RootForm"
import ContainerFlex from "base_components/ContainerFlex"

import {
  SubdomainText,
  Postfix,
  StatusIcon,
  StatusTitle,
  Status,
  GrayContainer,
  ContainerDisplayLogo,
  DisplayTextLogo,
  Panel,
  Button,
  Form,
  Wrapper
} from "./elements"

import { updateFieldValue, validate } from "../functions"

const validationSchema = joi.object().keys({})

const PanelWebAddress = ({ domain, updateVal }) => (
  <Panel title="Web Address" paddingBottom="1.6em">
    <FormGroup>
      <Label>Name</Label>
      <ContainerFlex isAlignCenter>
        <SubdomainText
          value={domain}
          onChange={e => updateVal(e.target.value, "domain")}
          placeholder="CrossView"
        />
        <Postfix>.equipengine.com</Postfix>
      </ContainerFlex>
    </FormGroup>
  </Panel>
)

const PanelDomainMapping = ({
  isUseCustomDomain,
  customDomainName,
  updateVal
}) => (
  <Panel title="Domain Mapping" borderBottom="0" paddingBottom="0">
    <ContainerDisplayLogo alignItems="center">
      <DisplayTextLogo>Use a custom domain</DisplayTextLogo>
      <Switch
        value={isUseCustomDomain}
        onChange={e => updateVal(e.target.checked, "isUseCustomDomain")}
      />
    </ContainerDisplayLogo>
    <GrayContainer>
      <FormGroup>
        <Label>Domain Name</Label>
        <Text
          value={customDomainName}
          onChange={e => updateVal(e.target.value, "customDomainName")}
          placeholder="crossenv.com.ua"
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

const Descriptions = () => (
  <Panel>
    <p>Instructions for linking to custom domain</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
      do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </Panel>
)

class ItemTabDomainMapping extends Component {
  state = {
    domain: "",
    isUseCustomDomain: false,
    customDomainName: ""
  }

  updateVal = (e, selector) => {
    const fields = this.state

    const nextFields = updateFieldValue(e, selector, fields)

    this.setState(nextFields)
  }

  onSubmit = e => {
    e.preventDefault()

    const fields = this.state

    const validationResult = validate(fields, validationSchema)

    if (validationResult.error === null) {
      return toastr.success("Domain mapping", "Data updated successfully")
    }

    toastr.error(
      "Validation error",
      validationResult.error.details[0].context.label
    )
  }

  render() {
    const { domain, isUseCustomDomain, customDomainName } = this.state

    return (
      <Wrapper>
        <Form>
          <PanelWebAddress domain={domain} updateVal={this.updateVal} />
          <PanelDomainMapping
            isUseCustomDomain={isUseCustomDomain}
            customDomainName={customDomainName}
            updateVal={this.updateVal}
          />
          <Button onClick={this.onSubmit}>Update</Button>
        </Form>
        <Descriptions />
      </Wrapper>
    )
  }
}

export default ItemTabDomainMapping
