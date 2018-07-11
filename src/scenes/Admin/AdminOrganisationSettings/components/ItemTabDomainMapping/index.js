import React from "react"

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

const PanelWebAddress = () => (
  <Panel title="Web Address" paddingBottom="1.6em">
    <FormGroup>
      <Label>Name</Label>
      <ContainerFlex isAlignCenter>
        <SubdomainText name="crossView" placeholder="CrossView" />
        <Postfix>.equipengine.com</Postfix>
      </ContainerFlex>
    </FormGroup>
  </Panel>
)

const PanelDomainMapping = () => (
  <Panel title="Domain Mapping" borderBottom="0" paddingBottom="0">
    <ContainerDisplayLogo alignItems="center">
      <DisplayTextLogo>Use a custom domain</DisplayTextLogo>
      <Switch name="useCustomDomain" />
    </ContainerDisplayLogo>
    <GrayContainer>
      <FormGroup>
        <Label>Domain Name</Label>
        <Text name="domain-name" placeholder="crossenv.com.ua" />
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

const ItemTabDomainMapping = () => (
  <Wrapper>
    <Form>
      <PanelWebAddress />
      <PanelDomainMapping />
      <Button>Update</Button>
    </Form>
    <Descriptions />
  </Wrapper>
)

export default ItemTabDomainMapping
