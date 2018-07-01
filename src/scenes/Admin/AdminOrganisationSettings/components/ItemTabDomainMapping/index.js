import React from "react"
import styled from "styled-components"
// components
import Form from "./components/Form"
import Panel from "./components/Panel"
import Button from "./components/Button"
import Wrapper from "./components/Wrapper"
import { FormGroup, Label, Text, Switch } from "base_components/RootForm"
import ContainerFlex from "base_components/ContainerFlex"

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

//
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

const SubdomainText = Text.extend`
  max-width: 356px;
`

const Postfix = styled.div`
  margin-left: 12px;
`

//
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

const StatusIcon = styled.div`
  background-color: ${({ isConnected: x }) => (x ? "#2FE330" : "#D0021B")};
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin-left: 3px;
  margin-right: 11px;
`

const StatusTitle = styled.span`
  font-size: 14px;
`

const Status = styled.span`
  font-size: 11px;
`

const GrayContainer = styled.div`
  background-color: #f3f3f3;
  padding: 22px;
  margin-bottom: 10px;
`

const ContainerDisplayLogo = styled(ContainerFlex)`
  margin-top: 0.6em;
  margin-bottom: 2.6em;
`

const DisplayTextLogo = styled.span`
  margin-right: 2em;
`

//
const Descriptions = styled(({ className }) => (
  <Panel className={className}>
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
))`
  padding-top: 200px;
  border-bottom: none;

  @media screen and (max-width: 767px) {
    padding-top: 30px;
    padding-left: 2%;
    padding-right: 2%;
  }
`
