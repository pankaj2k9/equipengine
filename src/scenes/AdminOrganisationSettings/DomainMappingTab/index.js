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
  Form
} from "./elements"

import { updateFieldValue, validate } from "utils/formFunctions"
import { compose, pure } from "recompose"

const validationSchema = joi.object().keys({
  domain: joi
    .string()
    .required()
    .label("Domain field is required")
})

const PanelWebAddress = ({ domain, onChange }) => (
  <Panel title="Web Address" paddingBottom="1.6em">
    <FormGroup>
      <Label>Name &#42;</Label>
      <ContainerFlex isAlignCenter>
        <SubdomainText
          value={domain}
          onChange={e => onChange(e.target.value, "domain")}
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
  onChange
}) => (
  <Panel title="Domain Mapping" borderBottom="0" paddingBottom="0">
    <ContainerDisplayLogo alignItems="center">
      <DisplayTextLogo>Use a custom domain</DisplayTextLogo>
      <Switch
        value={isUseCustomDomain}
        onChange={e => onChange(e.target.checked, "isUseCustomDomain")}
      />
    </ContainerDisplayLogo>
    <GrayContainer>
      <FormGroup>
        <Label>Domain Name</Label>
        <Text
          value={customDomainName}
          onChange={e => onChange(e.target.value, "customDomainName")}
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

class ItemTabDomainMapping extends Component {
  state = {
    domain: "",
    isUseCustomDomain: false,
    customDomainName: ""
  }

  onChange = (e, selector) => {
    const fields = this.state

    const nextFields = updateFieldValue(e, selector, fields)

    this.setState(nextFields)
  }

  onSubmit = () => {
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
      <Form>
        <PanelWebAddress domain={domain} onChange={this.onChange} />
        <PanelDomainMapping
          isUseCustomDomain={isUseCustomDomain}
          customDomainName={customDomainName}
          onChange={this.onChange}
        />
        <Button onClick={this.onSubmit}>Update</Button>
      </Form>
    )
  }
}

export default compose(pure)(ItemTabDomainMapping)